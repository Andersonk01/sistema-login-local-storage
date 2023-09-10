"use client";
import { usePathname } from "next/navigation";
import { checkRoute } from "@/functions/check-route";
import PrivateRoute from "@/components/PrivateRoute";

export const CheckRouteWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathName = usePathname();
  const isPublic = checkRoute(pathName);

  return (
    <>
      {isPublic && children}
      {!isPublic && <PrivateRoute>{children}</PrivateRoute>}
    </>
  );
};
