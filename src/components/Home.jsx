import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EyeTracker from "./EyeTracker";
import About from "./About";
import Projects from "./Projects";
import Intro from "./Intro";
import {
  FaCode,
  FaChartBar,
  FaDatabase,
  FaRobot,
  FaTable,
} from "react-icons/fa";

const Home = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    //if any new certificates...add here
    {
      title: "NPTEL Python for Data Science",
      image: "/nptel.png",
      description: "Earned Silver Elite in Python for Data Science.",
    },
    {
      title: "Scaler Python Course",
      image: "/scaler.png",
      description: "Completed Python Course for Beginners with Certification.",
    },
    {
      title: "Database Management System",
      image: "/infosys.png",
      description:
        "Completed DBMS Course from Infosys Springboard with Certification.",
    },
  ];

  const skillDomains = [
    {
      domain: "Programming",
      icon: <FaCode className="text-3xl text-blue-600" />,
      skills: ["Python", "HTML", "CSS"],
    },
    {
      domain: "Data Analysis",
      icon: <FaTable className="text-3xl text-green-600" />,
      skills: ["Excel", "SQL", "NumPy", "Pandas"],
    },
    {
      domain: "Visualization",
      icon: <FaChartBar className="text-3xl text-purple-600" />,
      skills: ["Power BI", "Matplotlib", "Seaborn"],
    },
    {
      domain: "Databases",
      icon: <FaDatabase className="text-3xl text-yellow-600" />,
      skills: ["SQL", "Relational DBs"],
    },
    {
      domain: "Machine Learning",
      icon: <FaRobot className="text-3xl text-red-600" />,
      skills: ["ML", "NLP"],
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then((result) => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        alert("Failed to send message. Please try again later!");
        console.log("FAILED...", error.text);
      });
  };

  const smoothScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Intro Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white h-screen flex items-center justify-center flex-col text-center">
        <EyeTracker />
        <Intro />
      </div>

      {/* About Section */}
      <div
        className="bg-white/60 backdrop-blur-md py-10 px-6 md:px-20 flex justify-center"
        id="about"
      >
        <About />
      </div>

      {/* Projects Section */}
      <div>
        <Projects />
      </div>

      {/* Certifications Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-20" id="certifications">
        <h2 className="text-4xl font-bold text-blue-900 text-center">
          Certifications
        </h2>
        <p className="text-center text-gray-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
          Verified certifications that highlight my journey of learning, growth,
          and proven expertise across diverse tools, technologies, and domains.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="relative bg-white w-full max-w-xs md:max-w-sm shadow-lg rounded-lg overflow-hidden 
                 p-3 md:p-4 text-center transform transition-transform hover:scale-105 mx-auto"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-28 md:h-40 lg:h-60 object-cover rounded-md"
              />
              <h3 className="text-sm md:text-lg font-bold mt-3">
                {cert.title}
              </h3>
              <p className="text-gray-700 text-xs md:text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Enlargement */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-xs md:max-w-lg w-full text-center relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
              onClick={() => setSelectedCert(null)}
            >
              X
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto max-h-[60vh] object-contain"
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">
              {selectedCert.title}
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              {selectedCert.description}
            </p>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <div
        className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-16 px-4 sm:px-6 md:px-20"
        id="skills"
      >
        <h2 className="text-4xl font-bold text-blue-900 text-center">Skills</h2>
        <p className="text-center text-gray-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
          A curated collection of tools, frameworks, and technologies I actively
          work with to build efficient, scalable, and impactful solutions across
          diverse domains.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillDomains.map((domain, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 sm:p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {/* Icon in a circle */}
              <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-100 shadow-md mb-3 sm:mb-4">
                {domain.icon}
              </div>

              {/* Domain Name */}
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 text-center">
                {domain.domain}
              </h3>

              {/* Skills as pill badges */}
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {domain.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-200 text-gray-800 text-[10px] sm:text-xs rounded-full hover:bg-gray-300 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div
        className="bg-gray-800 text-white py-16 px-6 md:px-20 text-center"
        id="contact"
      >
        <h2 className="text-4xl font-bold text-white">Contact Me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-6 max-w-lg mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                 focus:outline-none focus:border-gray-400 autofill:!bg-gray-700 autofill:!text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                 focus:outline-none focus:border-gray-400 autofill:!bg-gray-700 autofill:!text-white"
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Contact"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                 focus:outline-none focus:border-gray-400 autofill:!bg-gray-700 autofill:!text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                 focus:outline-none focus:border-gray-400 autofill:!bg-gray-700 autofill:!text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
