import { Navigate, useLocation } from "react-router-dom";
import type { JSX } from "react/jsx-dev-runtime";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = sessionStorage.getItem("auth") === "true";
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirigimos a foco, pero guardamos 'from' para saber a dónde quería ir
    return <Navigate to="/summit2026-foco" state={{ from: location, openLogin: true }} replace />;
  }

  return children;
}