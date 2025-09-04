import { FaHome, FaUser, FaProjectDiagram, FaCertificate } from "react-icons/fa";

const Navbar = () => {
  const smoothScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop / Tablet Navbar */}
      <nav className="bg-gray-800 text-white py-4 px-6 fixed w-full top-0 shadow-md z-50 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-50">Ansh Chaurasiya</h1>

          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-400"
                onClick={(e) => smoothScroll(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-400"
                onClick={(e) => smoothScroll(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="hover:text-blue-400"
                onClick={(e) => smoothScroll(e, "certifications")}
              >
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Top Navbar (Only Portfolio Name) */}
      <nav className="bg-gray-800 text-white py-3 px-6 fixed w-full top-0 shadow-md z-50 flex sm:hidden">
        <h1 className="text-xl font-bold text-blue-50">Portfolio</h1>
      </nav>

      {/* Mobile Bottom Navbar */}
      <div className="sm:hidden fixed bottom-0 w-full bg-gray-800 text-white shadow-inner z-50">
        <div className="flex justify-around items-center py-2">
          <a href="/"
            className="flex flex-col items-center text-xs hover:text-blue-400"
          >
            <FaHome size={20} />
            <span>Home</span>
          </a>
          <button
            onClick={(e) => smoothScroll(e, "about")}
            className="flex flex-col items-center text-xs hover:text-blue-400"
          >
            <FaUser size={20} />
            <span>About</span>
          </button>
          <button
            onClick={(e) => smoothScroll(e, "projects")}
            className="flex flex-col items-center text-xs hover:text-blue-400"
          >
            <FaProjectDiagram size={20} />
            <span>Projects</span>
          </button>
          <button
            onClick={(e) => smoothScroll(e, "certifications")}
            className="flex flex-col items-center text-xs hover:text-blue-400"
          >
            <FaCertificate size={20} />
            <span>Certs</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
