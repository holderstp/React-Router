import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";



const MainLayout = () => {
  return (
    <main>


      <header className="flex h-16 w-full items-center justify-between px-4 fixed top-0 left-0 right-0">
        <p className="font-tesla text-4xl text-white uppercase">tesla</p>
        <ul className="flex list-none items-center justify-between space-x-4">
          <li>
            <Link to="/" className="font-sans uppercase text-md text-white">Home</Link>
          </li>


          <li>
            <Link to="/models" className="font-sans uppercase text-md text-white">Model S</Link>
          </li>
          <li>
            <Link to="/model3" className="font-sans uppercase text-md text-white">Model 3</Link>
          </li>
          <li>
            <Link to="/modelx" className="font-sans uppercase text-md text-white">Model X</Link>
          </li>
         

        </ul>
        <div className="flex justify-center items-center space-x-6">
          <li>
            <Link to="/#" className="font-sans uppercase text-md text-white">Shop</Link>
          </li>
          <li>
            <Link to="/#" className="font-sans uppercase text-md text-white">Sign In</Link>
          </li>

        </div>
      </header>
      <div>
        <Outlet />
      </div>

    </main>


  );
};

export default MainLayout
