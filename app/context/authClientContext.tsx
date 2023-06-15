"use client";
import { createContext, useState, useContext, useMemo } from "react";
import { useRouter } from "next/navigation";
import { User } from "../models/User";
import { useLocalStorage } from "../hooks";
import { getUserByPassword } from "../services/getUserByPassword";
interface AuthContextProps {
  userAuth: User[];
  password: number;
  error: string;
  isAuthenticated: boolean;
  validateUser: (code: number) => void;
  loadAuthUser: boolean;
  logout: () => void;
  setUserAuth: (user: User[]) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter();
  const [userAuth, setUserAuth] = useLocalStorage<User[]>("userAuth", []);
  const [password, setPassword] = useState<number>(0o0);
  const [error, setError] = useState<string>("");
  const [loadAuthUser, setLoadAuthUser] = useState(false);

  const isAuthenticated = !!userAuth.length;
  const logout = () => {
    router.push("/login");
    setTimeout(() => {
      setUserAuth([]);
      setPassword(0o0);
    }, 100);
  };

  const validateUser = async (code: number) => {
    setLoadAuthUser(true);
    setError("");
    setPassword(code);

    try {
      const user = await getUserByPassword(code);
      if (user.id) {
        const { password, ...userWithoutPassword } = user;
        setUserAuth([userWithoutPassword]);
        router.push("/clients");
      } else {
        if (password.toString().length === 5) {
          setUserAuth([]);
          setError("El código ingresado no pertenece a ningún usuario");
        }
      }
    } catch (error) {
      console.error("Error validating user:", error);
      setError("Error al validar el usuario");
    }

    setLoadAuthUser(false);
  };

  const data: AuthContextProps = useMemo(() => {
    return {
      userAuth,
      password,
      error,
      validateUser,
      isAuthenticated,
      setUserAuth,
      logout,
      loadAuthUser,
    };
  }, [userAuth, password, error, isAuthenticated, loadAuthUser]);

  // if (!users.length) return <Loader />;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
