import { useContext, useState } from "react";
import { Level1 } from "./components/Level1";
import { ThemeModeContext, THEME } from "./contexts/ThemeModeContext";

export function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <div
        style={{
          backgroundColor: THEME[themeMode].backgroundColor,
          color: THEME[themeMode].textColor,
          height: "100vh",
        }}
      >
        <Level1 />
      </div>
    </ThemeModeContext.Provider>
  );
}
