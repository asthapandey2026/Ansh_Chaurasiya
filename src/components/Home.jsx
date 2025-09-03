import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import emailjs from '@emailjs/browser';
import EyeTracker from "./EyeTracker";
import About from "./About";

const Home = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const projects = [         //if any new projects...add here
    {
      title: "MCQs Generator Using NLP and Flask",
      description: "A multiple-choice question generator using NLP, integrated with LLMs for better content quality, and built with Flask.",
      link: "https://github.com/chaurasiaansh/Quiz-genrator"
    },
    {
      title: "Personal Finance Planner",
      description: "A Python-based finance management tool with an FD calculator, retirement planner, tax calculator, and financial strategies.",
      link: "https://personal-finance-project-zjayyxbpsbcsdhtezw94ag.streamlit.app"
    },
    {
      title: "Analysis Using Excel and Power BI",
      description: "Analyzed Blinkit's sales data, created profit and sales visualizations, and designed dashboards for automated reporting.",
      link: "https://github.com/chaurasiaansh/powerbi.git"
    }
  ];

  const certifications = [       //if any new certificates...add here
    { title: "NPTEL Python for Data Science", image: "/nptel.png", description: "Earned Silver Elite in Python for Data Science." },
    { title: "Scaler Python Course", image: "/scaler.png", description: "Completed Python Course for Beginners with Certification." },
    { title: "Database Management System", image: "/infosys.png", description: "Completed DBMS Course from Infosys Springboard with Certification." },
  ];

  const skills = [               //want to add skills..add here
    "Machine Learning", "NLP",
    "Excel", "SQL",
    "Python", "HTML", "CSS",
    "NumPy", "Pandas", "Matplotlib", "Seaborn",
    "Power BI",
    "SQL", "relational databases"
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      { publicKey: import.meta.env.VITE_PUBLIC_KEY }
    )

      .then(() => console.log('SUCCESS!'))
      .catch((error) => console.log('FAILED...', error.text));
  };

  const smoothScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <>
      {/* Intro Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white h-screen flex items-center justify-center flex-col text-center">
        <EyeTracker />
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-blue-400">Ansh Chaurasiya</span>
        </h1>
        <p className="text-lg mt-4 max-w-lg">
          Aspiring Machine Learning & AI Enthusiast | Data Analyst | CSE-AIML Student
        </p>
        <div className="mt-6">
          <button onClick={() => smoothScroll('projects')} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg transition-transform transform hover:scale-105">View Projects</button>
          <button onClick={() => smoothScroll('contact')} className="ml-4 border-2 border-blue-400 hover:bg-blue-400 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg transition-transform transform hover:scale-105">Contact Me</button>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-blue-50 py-16 px-6 md:px-20 flex justify-center items-center" id="about">
        <About />
      </div>


      {/* Projects Section */}
      <div className="bg-white py-16 px-6 md:px-20" id="projects">
        <h2 className="text-4xl font-bold text-blue-900 text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} link={project.link} />
          ))}
        </div>
      </div>



      {/* Certifications Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-20" id="certifications">
        <h2 className="text-4xl font-bold text-blue-900 text-center">Certifications</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="relative bg-white w-full max-w-sm shadow-lg rounded-lg overflow-hidden 
                   p-4 text-center transform transition-transform hover:scale-105 mx-auto"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 md:h-60 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-4">{cert.title}</h3>
              <p className="text-gray-700 text-sm">{cert.description}</p>
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
            <h3 className="text-lg md:text-xl font-bold mt-4">{selectedCert.title}</h3>
            <p className="text-gray-700 text-sm mt-2">{selectedCert.description}</p>
          </div>
        </div>
      )}



      {/* Skills Section */}
      <div className="bg-blue-900 text-white py-16 px-6 md:px-20" id="skills">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-blue-700 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-800 text-white py-16 px-6 md:px-20 text-center" id="contact">
        <h2 className="text-4xl font-bold text-white">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="mt-6 max-w-lg mx-auto space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white" />
          <input type="number" name="phone" placeholder="Your Contact" className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white"></textarea>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-medium">Send</button>
        </form>
      </div>
    </>
  );
};

export default Home;
