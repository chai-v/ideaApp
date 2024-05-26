import React from "react";
import { useNavigate } from "react-router-dom";

interface Signupprops {}

const Signup: React.FC<Signupprops> = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home/dashboard");
  };

  return (
    <div className="w-full h-screen bg-custom-gradient flex items-center justify-center p-4">
      <div className="bg-cream w-full max-w-3xl rounded-md shadow-md p-6">
        <h1 className="text-purple font-bold text-2xl mb-4 text-center">Sign up</h1>
        <div className="flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <form className="flex flex-col gap-4">
                <label className="font-semibold text-lg">Name</label>
                <input className="p-2 border border-darkcream rounded-md" type="text" />
                <label className="font-semibold text-lg">Role in college</label>
                <select className="p-2 border border-darkcream rounded-md">
                  <option>Student</option>
                  <option>Faculty</option>
                  <option>Alumni</option>
                </select>
                <label className="font-semibold text-lg">Email</label>
                <input className="p-2 border border-darkcream rounded-md" type="email" />
              </form>
            </div>
            <div className="flex flex-col justify-center">
              <form className="flex flex-col gap-4">
                <label className="font-semibold text-lg">Username</label>
                <input className="p-2 border border-darkcream rounded-md" type="text" />
                <label className="font-semibold text-lg">Password</label>
                <input className="p-2 border border-darkcream rounded-md" type="password" />
                <label className="font-semibold text-lg">Confirm Password</label>
                <input className="p-2 border border-darkcream rounded-md" type="password" />
              </form>
            </div>
          </div>
          <button onClick={handleLogin} className="bg-purple text-cream font-semibold rounded-md px-10 py-2 mt-4">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
