import React from "react";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-[90%] mx-auto my-12 items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
