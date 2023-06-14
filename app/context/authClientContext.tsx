"use client";
import { createContext, useState, useContext, useMemo } from "react";
import { useRouter } from "next/navigation";
import { User } from "../models/User";
import { useFetchUsers, useLocalStorage } from "../hooks";
import Loader from "../components/Loader";

interface AuthContextProps {
  userAuth: User[];
  users: User[];
  password: number;
  error: string;
  loading: boolean;
  isAuthenticated: boolean;
  validateUser: (code: number) => void;
  setUserAuth: (user: User[]) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter();
  const { users, loading } = useFetchUsers();
  const [userAuth, setUserAuth] = useLocalStorage<User[]>("userAuth", []);
  const [password, setPassword] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const validateUser = (code: number) => {
    setError("");
    setPassword(code);

    const filteredUsers: User[] = users.filter(
      (user) => user.password === code
    );
    if (filteredUsers.length && filteredUsers[0].password === code) {
      const { password, ...userWithoutPassword } = filteredUsers[0];
      setUserAuth([userWithoutPassword]);
      router.push("/clients");
    } else {
      if (password.toString().length === 5) {
        setUserAuth([]);
        setError("El código ingresado no pertenece a ningún usuario");
      }
    }
  };
  const isAuthenticated = !!userAuth.length;

  const data: AuthContextProps = useMemo(() => {
    return {
      userAuth,
      password,
      error,
      validateUser,
      loading,
      isAuthenticated,
      users,
      setUserAuth,
    };
  }, [userAuth, password, error, loading, isAuthenticated, users]);

  if (!users.length) return <Loader />;

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
