import React from "react";
import { useTheme } from "../context/ThemeContext";

function Hero() {
  const { state } = useTheme();

  function handleContactBtn (){
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row p-4 py-10 justify-between items-center bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300">
        <div className="flex-1">
          <h1
            className={`font-bold py-1 text-4xl ${
              state.fontSize === "small"
                ? "text-base"
                : state.fontSize === "large"
                ? "text-5xl"
                : "text-4xl"
            }`}
          >
            Ahmed Abdela
          </h1>
          <h2 className="text-gray-600 text-2xl dark:text-zinc-300">
            Frontend-Mobile and Web Developer
          </h2>
          <p className="py-4">
            I am a frontend developer student this is my portfolio site.
            Welcome!
          </p>
        </div>

        <div className="flex-shrink-0 mr-28 md:mt-0">
          <img
            src="/img/PC.jpg"
            alt="Portfolio picture"
            className="h-52 w-52 rounded-full border object-cover"
          />
        </div>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 dark:bg-black dark:hover:bg-slate-900 text-white font-bold py-2 px-4 rounded ml-20 mb-8" onClick={handleContactBtn}>
        Contact
      </button>
    </>
  );
};

export default Hero;
