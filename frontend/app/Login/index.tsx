import GoogleLoginButton from "components/GoogleLoginButton";
import { useAuth } from "context/AuthContext";
import React from "react";

const Login = () => {
  const { user } = useAuth();
  console.log("userdetails", user);
  return (
    <div>
      <h1>Login</h1>
      <GoogleLoginButton />
    </div>
  );
};

export default Login;
