import { createContext } from "react";

export const ThemeModeContext = createContext();

export const THEME = {
  light: {
    backgroundColor: "white",
    textColor: "#1E1F2C",
  },
  dark: {
    backgroundColor: "#1E1F2C",
    textColor: "white",
  },
};
