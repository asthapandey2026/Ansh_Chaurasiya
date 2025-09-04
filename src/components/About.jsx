import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const [showFullAbout, setShowFullAbout] = useState(false);

  const handleResumeDownload = () => {
    const resumeUrl = "/Ansh Chaurasiya Resume.pdf"; // Update with the actual resume file path
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ansh Chaurasiya.pdf"; // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-br text-gray-900 mt-6 flex flex-col">
      <div className="flex-grow flex justify-center items-center p-4 sm:p-6 md:p-10">
        <div className="bg-gradient-to-br text-gray-900 flex flex-col">
          {/* Resume Download Button */}
          <div className="text-right p-4 sm:p-6 md:p-10">
            <button
              onClick={handleResumeDownload}
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base md:text-lg font-medium shadow-md transition-transform transform hover:scale-105"
            >
              <u>↓</u> Download Resume
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-6 sm:px-12 md:px-20 lg:px-40">
            <img
              src="/profile-pic ansh.png"
              alt="Ansh Chaurasiya"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-gray-300"
            />
            <div className="text-center md:text-left max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Ansh Chaurasiya
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2">
                Machine Learning & AI Enthusiast | Data Analyst
              </p>

              {/* Objective */}
              <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                Transforming raw data into smart, scalable and actionable outcomes in order to craft intelligent solutions through Machine Learning and Data Analytics.
              </p>

              {/* Read More Button */}
              {!showFullAbout && (
                <button
                  onClick={() => setShowFullAbout(true)}
                  className="mt-5 px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-lg flex items-center gap-2 mx-auto md:mx-0 transition-transform hover:scale-105"
                >
                  Know More <span className="text-lg">↓</span>
                </button>
              )}
            </div>
          </div>

          {/* Expanded Details */}
          {showFullAbout && (
            <div className="mt-12 px-6 sm:px-12 md:px-20 lg:px-40 space-y-14 animate-fadeIn">
              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-center mb-6">Contact</h2>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {[
                    {
                      href: "mailto:anshhchaurasiya@gmail.com",
                      text: "Email",
                      icon: <FaEnvelope className="inline-block mr-1 sm:mr-2 text-blue-700 text-sm sm:text-base" />,
                    },
                    {
                      href: "https://www.linkedin.com/in/ansh-chaurasia-6a437925a/",
                      text: "LinkedIn",
                      icon: <FaLinkedin className="inline-block mr-1 sm:mr-2 text-blue-700 text-sm sm:text-base" />,
                    },
                    {
                      href: "https://github.com/chaurasiaansh",
                      text: "GitHub",
                      icon: <FaGithub className="inline-block mr-1 sm:mr-2 text-gray-800 text-sm sm:text-base" />,
                    },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 sm:p-4 rounded-lg bg-white/70 shadow-md hover:shadow-xl hover:scale-[1.03] transition text-xs sm:text-base backdrop-blur-md"
                    >
                      {item.icon}
                      <h3 className="font-semibold text-gray-800">{item.text}</h3>
                    </a>
                  ))}
                </div>
              </section>


              {/* Skills */}
              <section>
                <h2 className="text-2xl font-bold text-center mb-6">Skills</h2>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
                  {[
                    { name: "Data Analysis", desc: "Excel, SQL, NumPy, Pandas", icon: "📊" },
                    { name: "Visualization", desc: "Power BI, Matplotlib, Seaborn", icon: "📈" },
                    { name: "Machine Learning", desc: "ML & NLP", icon: "🤖" },
                    { name: "Programming", desc: "Python, HTML, CSS", icon: "💻" },
                    { name: "Databases", desc: "SQL, RDBMS", icon: "🗄️" }
                  ].map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center p-2 sm:p-4 rounded-lg bg-white shadow-sm hover:shadow-md hover:scale-[1.03] transition"
                    >
                      <div className="text-xl sm:text-3xl mb-1 sm:mb-2">{skill.icon}</div>
                      <h3 className="text-xs sm:text-base font-semibold text-gray-800 text-center">{skill.name}</h3>
                      <p className="text-[10px] sm:text-sm text-gray-600 mt-1 text-center leading-snug">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </section>


              {/* Projects */}
              <section>
                <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                  {[
                    { title: "MCQs Generator", desc: "NLP-based multiple-choice question generator using Flask and LLMs." },
                    {
                      title: "Personal Finance Planner",
                      desc: "Finance management tool with tax calculator, retirement planner, FD estimator.",
                      link: "https://personal-finance-project-zjayyxbpsbcsdhtezw94ag.streamlit.app/",
                    },
                    {
                      title: "Analysis Using Excel & Power BI",
                      desc: "Conducted sales analysis for Blinkit, created dashboards, and automated reporting using Power BI.",
                    },

                  ].map((proj, i) => (
                    <div
                      key={i}
                      className="p-3 sm:p-6 rounded-xl bg-white/70 shadow-md hover:shadow-xl transition text-xs sm:text-sm md:text-base"
                    >
                      <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{proj.title}</h3>
                      <p className="text-gray-700 mt-2">{proj.desc}</p>
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          className="text-blue-600 hover:underline block mt-2"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>


              {/* Education */}
              <section>
                <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* College */}
                  <div className="p-6 rounded-xl bg-white/70 shadow-md hover:shadow-xl transition">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 flex-1">
                        Bachelor of Technology (CSE - AIML)
                      </h3>
                      <div className="bg-blue-900 text-white w-[100px] h-[32px] flex items-center justify-center rounded-lg text-xs font-medium shadow-sm">
                        2022 - 2026
                      </div>
                    </div>
                    <p className="text-gray-700 mt-2 text-sm">Lakshmi Narain College of Technology Excellence</p>
                  </div>
                  {/* High School */}
                  <div className="p-6 rounded-xl bg-white/70 shadow-md hover:shadow-xl transition">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 flex-1">
                        Higher Secondary (PCM)
                      </h3>
                      <div className="bg-blue-900 text-white w-[100px] h-[32px] flex items-center justify-center rounded-lg text-xs font-medium shadow-sm">
                        2020 - 2022
                      </div>
                    </div>
                    <p className="text-gray-700 mt-2 text-sm">Jai Academy, Jhansi</p>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h2 className="text-2xl font-bold text-center mb-6">Certifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white/70 shadow-md hover:shadow-xl transition">
                    <h3 className="text-lg font-semibold text-gray-900">NPTEL Python for Data Science</h3>
                    <p className="text-gray-700 mt-2 text-sm">Silver Elite certification in Python for Data Science.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-white/70 shadow-md hover:shadow-xl transition">
                    <h3 className="text-lg font-semibold text-gray-900">Scaler Python Course</h3>
                    <p className="text-gray-700 mt-2 text-sm">Completed Python for Beginners (Mastering the Essentials).</p>
                  </div>
                </div>
              </section>
              {/* Show Less Button */}
              <div className="flex justify-center animate-fadeIn">
                <button
                  onClick={() => setShowFullAbout(false)}
                  className="mt-8 w-full sm:w-auto px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-sm sm:text-base font-medium shadow-sm flex items-center gap-2 justify-center transition"
                >
                  Show Less <span className="text-lg">↑</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );


};

export default About;
