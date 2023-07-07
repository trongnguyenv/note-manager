import { useContext } from "react";
import { ThemeModeContext } from "../contexts/ThemeModeContext";

export function Level5(props) {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);

  function toggleThemeMode() {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  }

  return (
    <>
      <div>I am level 5</div>
      <button onClick={toggleThemeMode}>Toggle theme mode</button>
    </>
  );
}
