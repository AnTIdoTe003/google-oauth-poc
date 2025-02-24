import { AuthProvider } from "context/AuthContext";
import type { Route } from "./+types/home";
import LoginPage from "~/Login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Login() {
  return (
    <AuthProvider>
      <LoginPage/>
    </AuthProvider>
  );
}
