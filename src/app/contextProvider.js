"use client";
import React, {
  useContext,
  useEffect,
  createContext,
  useState,
  useRef,
} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getGrid } from "./utils";

const context = createContext();

export function useParam () {
  return useContext(context);
};

export default function Provider({ children }) {
  const [mode, setMode] = useState(null);
  const [algo, setAlgo] = useState("");
  const [run, setRun] = useState(false);
  const [grid, setGrid] = useState(getGrid(50, 25));
  const [editing, setEditing] = useState(false);
  const [reset, setReset] = useState(false);
  const start = useRef({ x: 25, y: 12 });
  const end = useRef({ x: 48, y: 23 });

  useEffect(() => {
    restart();
  }, [reset]);

  const restart = () => {
    setGrid(getGrid(50, 25));
  };
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <context.Provider
      value={{
        mode,
        setMode,
        algo,
        setAlgo,
        grid,
        setGrid,
        setReset,
        editing,
        setEditing,
        start,
        end,
        run,
        setRun,
        reset,
      }}
    >
      {children}
    </context.Provider>
  );
}
