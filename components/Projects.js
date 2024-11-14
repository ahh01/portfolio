function Projects() {
  const projects = [
    {
      title: "Guessing App",
      description: "This is a guessing app",
      link: "https://github.com/ahh01/GissningApp.git",
    },
    {
      title: "Radioplayer",
      description: "This is a site using Swedish radio API.",
      link: "https://github.com/ahh01/radioPlayer.js.git",
    },
    {
      title: "Memory Game",
      description: "My memory game created with React Native.",
      link: "https://github.com/ahh01/radioPlayer.js.git",
    },
    {
      title: "Todo App",
      description: "My Todo app created with React Native.",
      link: "https://github.com/ahh01/todoApp-React.git",
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold flex justify-center m-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-lg dark:bg-gray-900 dark:border-transparent"
          >
            <h2 className="font-bold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:text-blue-700 mt-2 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
