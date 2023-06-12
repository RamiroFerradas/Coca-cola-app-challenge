"use client";
import { createContext, useState, useContext, useMemo } from "react";
import { useRouter } from "next/navigation";
import { User } from "../models/User";
import { useFetchUsers, useLocalStorage } from "../hooks";

interface AuthContextProps {
  userAuth: User[];
  password: number;
  error: string;
  loading: boolean;
  isAuthenticated: boolean;
  validateUser: (code: number) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [userAuth, setUserAuth] = useLocalStorage<User[]>("userAuth", []);
  const [password, setPassword] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const { users, loading } = useFetchUsers();

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
    };
  }, [userAuth, password, error, loading, isAuthenticated]);

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
