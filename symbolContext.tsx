import React, { useState, createContext } from "react";

type SymbolsContextProviderProps = {
  children: React.ReactNode;
};

const [selectedSymbols, setSelectedSymbols] = useState("");

export const SymbolContext = createContext("");

export const symbolContextProvider = ({
  children,
}: SymbolsContextProviderProps) => {
  return (
    <SymbolContext.Provider value={selectedSymbols}>
      {children}
    </SymbolContext.Provider>
  );
};
