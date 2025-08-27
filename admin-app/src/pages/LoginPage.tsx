import { LoginForm } from "@/features/login";
import { useValidateTokenQuery } from "@/features/login/query/queries";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const validateQuery = useValidateTokenQuery();
  if (validateQuery.isLoading) return <div>Loading...</div>;
  if (validateQuery.data) return <Navigate to="/" />;
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center">
      <LoginForm className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6" />
    </div>
  );
};
