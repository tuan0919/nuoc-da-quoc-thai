import { LoginForm } from "@/features/login";

export const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center">
      <LoginForm className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6" />
    </div>
  );
};
