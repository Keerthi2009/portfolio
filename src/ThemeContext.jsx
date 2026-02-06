import { createContext, useEffect, useState } from "react";
import { generateTheme } from "./utils/color";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [primaryColor, setPrimaryColor] = useState(
    localStorage.getItem("primaryColor") || "#2563eb"
  );

  useEffect(() => {
    const theme = generateTheme(primaryColor);
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    localStorage.setItem("primaryColor", primaryColor);
  }, [primaryColor]);

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
