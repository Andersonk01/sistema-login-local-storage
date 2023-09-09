"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

type User = {
  email: string;
  password: string;
};
type AuthContextType = {
  user: User | null;
  signed: boolean;
  signin: (email: string, password: string) => string | void;
  signup: (email: string, password: string) => string | void;
  signout: () => void;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const userStorage = localStorage.getItem("user_db");

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter(
        (user: User) => user.email === JSON.parse(userToken).email
      );
      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd") || "[]");

    const hasUser = usersStorage?.filter((user: User) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };
  const signup = (email: string, password: string): string | void => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd") || "[]");

    const hasUser = usersStorage?.filter((user: User) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };
  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
