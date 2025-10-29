"use client";

import { createContext, useState } from "react";

interface UIContextType {
  showLayout: boolean;
  setShowLayout: (value: boolean) => void;
}

export const UIContext = createContext<UIContextType>({
  showLayout: true,
  setShowLayout: () => {},
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [showLayout, setShowLayout] = useState(true);

  return (
    <UIContext.Provider value={{ showLayout, setShowLayout }}>
      {children}
    </UIContext.Provider>
  );
};
