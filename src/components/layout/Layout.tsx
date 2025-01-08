import React from "react";
// import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      // className="min-h-screen bg-cover bg-center bg-gray-600 text-white overflow-hidden"
      // style={{
      //   backgroundImage: "url(../../assets/img/home.svg)",
      //   height: "100vh",
      // }}
    >
      <img
        src="../../assets/bg/allbg.svg"
        alt="Background gradient color"
        className="h-[100vh] bg-cover bg-center p-6 rounded-2xl text-white absolute w-full opacity-55"
      />
                  <div className='relative z-10 top-[15vh]'>

      <div className="bg-black rounded-lg py-2 mx-auto w-1/3">
        <h2 className="text-[30px] mb-1 font-rye text-center">
          Home cycle'Home
        </h2>
      </div>

      {/* <Header /> */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8  text-white">
        {children}
      </main>
      </div>
    </div>
  );
};
