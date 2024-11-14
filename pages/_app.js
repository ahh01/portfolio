import { useEffect } from "react";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    // Hantera temaväxling (dark eller light)
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Hantera fontstorlek
    document.documentElement.classList.remove(
      "text-small",
      "text-medium",
      "text-large"
    );
    if (state.userPreferences.fontSize === "small") {
      document.documentElement.classList.add("text-small");
    } else if (state.userPreferences.fontSize === "large") {
      document.documentElement.classList.add("text-large");
    } else {
      document.documentElement.classList.add("text-medium");
    }

    // Hantera reducerade animationer
    if (state.userPreferences.reduceAnimations) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [
    state.theme,
    state.userPreferences.fontSize,
    state.userPreferences.reduceAnimations,
  ]);

  return <Component {...pageProps} />;
}

export default function AppWrapper({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MyApp Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}
