import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 px-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://github.com/ahh01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            <FaGithub size={28} />
          </a>
        </div>

        <div className="text-center">
          <p className="font-medium">Established 2023</p>
          <p>© 2023 Ahmed Abdela. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
