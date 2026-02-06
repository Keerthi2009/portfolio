import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <span>Theme:</span>
      {["blue", "emerald", "violet", "slate"].map(t => (
        <button
          key={t}
          className={theme === t ? "active" : ""}
          onClick={() => setTheme(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
