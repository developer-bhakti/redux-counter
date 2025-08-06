import "./App.css";
import React from "react";
import Navbar from "./components/navbar.jsx";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-2xl font-bold mb-4">Redux Counter App</h1>
        <div className="flex items-center space-x-4 mb-36">
          <button
            onClick={() => dispatch(decrement())}
            className="px-8 py-2 text-2xl bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
          <span className="text-lg font-semibold">Count: {count}</span>
          <button
            onClick={() => dispatch(increment())}
            className="px-8 py-2 text-2xl bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
