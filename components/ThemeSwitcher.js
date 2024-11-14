import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { state, dispatch } = useTheme();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const changeFontSize = (size) => {
    dispatch({ type: "SET_FONT_SIZE", payload: size });
  };

  const toggleReduceAnimations = () => {
    dispatch({ type: "TOGGLE_REDUCE_ANIMATIONS" });
  };

  return (
    <div className="flex justify-between items-center dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <div className="ml-4 m-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
      </div>

      <div className="flex items-center space-x-8">
        <div className="m-4">
          <div className="flex gap-2">
            <form>
              <label htmlFor="font-size-select">Font Size: </label>
              <select
                id="font-size-select"
                onChange={(e) => changeFontSize(e.target.value)}
                className="ml-2 border rounded-md p-2 bg-white dark:bg-gray-700"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </form>
          </div>
        </div>

        <div className="m-4">
          <label>
            <input
              type="checkbox"
              checked={state.userPreferences.reduceAnimations}
              onChange={toggleReduceAnimations}
            />
            Reduce Animations
          </label>
        </div>
      </div>

      <button
        className="mr-4 m-4 focus:outline-none transition-colors duration-300"
        onClick={toggleTheme}
      >
        {state.theme === "light" ? (
          <FaMoon className="text-gray-800" size={18} />
        ) : (
          <FaSun className="text-white" size={18} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
