import { useRouter } from "next/router";
import { useEffect } from "react";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export default function ProtectedRoute({
  isAuthenticated,
  children,
}: ProtectedRouteProps) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // Se o usuário não estiver autenticado, redirecione para a página de login
      router.push("/login"); // Altere o caminho de redirecionamento conforme necessário
    }
  }, [isAuthenticated]);

  return <>{isAuthenticated ? children : null}</>;
}
