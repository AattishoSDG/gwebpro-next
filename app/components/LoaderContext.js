"use client";
import { createContext, useContext, useState, useCallback } from "react";

const LoaderContext = createContext({
  show: () => {},
  hide: () => {},
  isLoading: false,
});

export function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const show = useCallback(() => setIsLoading(true), []);
  const hide = useCallback(() => setIsLoading(false), []);
  return (
    <LoaderContext.Provider value={{ show, hide, isLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}
