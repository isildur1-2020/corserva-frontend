import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirect = () => {
  const navigate = useNavigate();
  const handleRedirect = useCallback((path) => navigate(path), []);
  return { handleRedirect };
};
