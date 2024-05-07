import React, { useState } from "react";
/*import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";*/

export default function App() {
  const [currentPage, setCurrentPage] = useState("about");
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar onPageChange={handlePageChange} />
      {currentPage === "about" && <About />}
      {currentPage === "skills" && <Skills />}
    </main>
  );
}

function About() {
  return (
    <section id="About">
    <div className="bg-white">
      <div className="container mx-auto flex px-30 py-40 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue mb-2">
            Hello, I'm U Lam Lou.
          </h1>
          <h3 className="title-font text-4xl md:text-5xl mb-4 font-bold text-darkblue">
            About Me
            <br className="hidden lg:inline-block" /> UX Researcher and Graphic
            Designer
          </h3>
          <p className="mb-8 leading-relaxed text-lighterblue text-lg">
            B.S. Cognitive Science w/spec. Design and Interaction at UC San Diego.<br/>
            Currently working in Healthcare Robotics Lab.<br/>
            Previously an instructional assistant in COGS 100 and Design 1.<br/>
            Worked as a graphic designer for Comfort Tone, an acapella group at UC San Diego.<br/>
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="Skills">
    <div className="bg-white">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-darkblue mb-4">
            Skills
          </h2>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <ul className="list-disc mx-auto text-lighterblue text-base leading-relaxed xl:w-2/4 lg:w-3/4">
            <li className="mb-3">Figma</li>
            <li className="mb-3">Adobe Illustrator</li>
            <li className="mb-3">Adobe Photoshop</li>
            <li className="mb-3">Java</li>
            <li className="mb-3">Python</li>
            <li className="mb-3">C</li>
            <li className="mb-3">CAD</li>
            <li className="mb-3">Fusion</li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
}

function Navbar({ onPageChange }) {
  return (
    <header className="bg-blue-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <button onClick={() => onPageChange("about")} className="mr-5 hover:text-white focus:outline-none">
            About
          </button>
          <button onClick={() => onPageChange("skills")} className="mr-5 hover:text-white focus:outline-none">
            Skills
          </button>
        </nav>
      </div>
    </header>
  );
}
