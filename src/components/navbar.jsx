import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md  ">
      <div className="container mx-auto flex justify-between ">
        <span className="font-bold text-xl">My App</span>
        <span>Count in Navbar: {count}</span>
      </div>
    </nav>
  );
};

export default Navbar;
