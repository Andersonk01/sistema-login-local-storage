"use client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { push } = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isUserAuthenticated");
    push("/");
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-4">
        Seja bem-vindo Admin
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleLogout}
      >
        Sair
      </button>
    </main>
  );
}
