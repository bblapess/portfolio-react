import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const handelCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="flex w-full flex-row justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="my-4 flex flex-col items-center justify-center gap-2">
        <button
          className="max-w-max rounded-md bg-zinc-900 px-4 py-2 text-base font-medium text-white shadow-md"
          onClick={handelCount}
        >
          Count: {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
