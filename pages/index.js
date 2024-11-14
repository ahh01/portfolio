import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

 function Home() {
  return (
    <div className="min-h-screen m-0 p-0 bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <Navbar/>
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
export default Home