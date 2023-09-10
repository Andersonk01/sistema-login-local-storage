"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { APP_ROUTES } from "@/constants/app-routes";

import { checkUserAuthentication } from "@/functions/checkUserAuthentication";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();

  const isUserAuthenticated = checkUserAuthentication();

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.login);
    }
  }, [isUserAuthenticated, push]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};

export default PrivateRoute;
