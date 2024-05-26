import React from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home/dashboard");
  };

  return (
    <div className="w-full h-screen bg-custom-gradient flex items-center justify-center p-4">
      <div className="bg-cream w-full max-w-md rounded-md shadow-md p-6">
        <h1 className="text-purple font-bold text-2xl mb-4 text-center">Login</h1>
        <form className="flex flex-col gap-4">
          <label className="font-semibold text-lg">Username</label>
          <input
            className="p-2 border border-darkcream rounded-md"
            type="text"
          />
          <label className="font-semibold text-lg">Password</label>
          <input
            className="p-2 border border-darkcream rounded-md"
            type="password"
          />
          <button
            type="button"
            onClick={handleLogin}
            className="bg-purple text-cream rounded-md p-3 mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
