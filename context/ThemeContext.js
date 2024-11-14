import React, { createContext, useContext, useReducer } from "react";

// Skapar ThemeContext
const ThemeContext = createContext();

const initialState = {
  theme: "light", // Ljust tema som standard
  userPreferences: {
    fontSize: "medium", // Standard fontstorlek
    reduceAnimations: false, // Inga reducerade animationer som standard
  },
};

// Reducer-funktion för att hantera temaväxling och användarpreferenser
function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_FONT_SIZE":
      return {
        ...state,
        userPreferences: { ...state.userPreferences, fontSize: action.payload },
      };
    case "TOGGLE_REDUCE_ANIMATIONS":
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          reduceAnimations: !state.userPreferences.reduceAnimations,
        },
      };
    default:
      return state;
  }
}

// ThemeProvider-komponenten som wrapper hela applikationen
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// En hook för att enkelt använda temat
export const useTheme = () => useContext(ThemeContext);
