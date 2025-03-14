import React from "react";

const Navbar = () => {
  const smoothScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-50">Ansh Chaurasiya</h1>

        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-blue-400" >
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400" onClick={(e) => smoothScroll(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400" onClick={(e) => smoothScroll(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-blue-400" onClick={(e) => smoothScroll(e, "certifications")}>
              Certifications
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
