import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";

export function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, [])
}