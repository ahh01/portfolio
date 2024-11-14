/* import React from "react";
import { IoCode } from "react-icons/io5";

function Skills() {
  const skills = [
    {
      title: "HTML",
    },
    {
      title: "CSS",
    },
    {
      title: "Git",
    },
    {
      title: "Javascript",
    },
    {
      title: "Responsive Design"
    },
    {
      title: "React",
    },
    {
      title: "React-native",
    },
    {
      title: "TypeScript",
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold flex justify-center m-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-16 bg-gray-100 dark:bg-slate-900 dark:text-white transition-colors duration-300 items-center">
        {skills.map((skill, index) => (
          <div key={index} className="p-2 border rounded-md">
            {skill.title} <IoCode />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
 */

import React from "react";
import { IoCode } from "react-icons/io5";

function Skills() {
  const skills = [
    { title: "HTML" },
    { title: "CSS" },
    { title: "Git" },
    { title: "Javascript" },
    { title: "Responsive Design" },
    { title: "React" },
    { title: "React-Native" },
    { title: "TypeScript" },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold flex justify-center m-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-16 bg-gray-100 dark:bg-slate-900 dark:text-white transition-colors duration-300 items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 border rounded-md flex items-center justify-center"
          >
            {skill.title} <IoCode className="ml-2" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
