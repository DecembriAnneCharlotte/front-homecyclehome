import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import { Layout } from "../../components/layout/Layout";

export const Login: React.FC = () => {
  return (
    <div
    className="min-h-screen bg-cover bg-center bg-gray-600 text-white overflow-hidden"
    style={{
      backgroundImage: "url(../../assets/img/loginbg.svg)",
      height: "100vh",
    }}
  >

    <Layout>
      <div className="relative">
        <div className="relative z-10 top-[15vh]">
          <div className="w-2/3 mx-auto">
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
    </div>
  );
};
