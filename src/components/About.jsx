import React, { useState } from "react";
// import { FaFileDownload } from 'react-icons/fa';

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
    <div className="bg-gradient-to-br  text-gray-900 mt-6 min-h-screen flex flex-col">
      <div className="flex-grow flex justify-center items-center p-4 sm:p-6 md:p-10">
        <div className="backdrop-blur-lg bg-white/80 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-6xl border border-gray-200">

          {/* Resume Download Button */}
          <div className="text-right mb-6">
            <button
              onClick={handleResumeDownload}
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base md:text-lg font-medium shadow-md transition-transform transform hover:scale-105"
            >
              ↓ Download Resume
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start mb-10 gap-6">
            <img
              src="/profile-pic ansh.png"
              alt="Ansh Chaurasiya"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-gray-300"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Ansh Chaurasiya</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2">
                Machine Learning & AI Enthusiast | Data Analyst
              </p>

              {/* Objective */}
              <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl text-sm sm:text-base">
                Transforming raw data into smart, scalable and actionable outcomes in order to craft intelligent solutions through Machine Learning and Data Analytics.
              </p>

              {/* Read More Button */}
              {!showFullAbout ? (
                <button
                  onClick={() => setShowFullAbout(true)}
                  className="mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm sm:text-base shadow-sm transition"
                >
                  Read More →
                </button>
              ) : (
                <button
                  onClick={() => setShowFullAbout(false)}
                  className="mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm sm:text-base shadow-sm transition"
                >
                  Show Less ↑
                </button>
              )}
            </div>
          </div>

          {/* Expanded Details */}
          {showFullAbout && (

            <div className="space-y-10 transform perspective-1000">
              <hr className="my-6 border-gray-300 shadow-md transform hover:scale-105 transition-transform duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1)"
                }}
              />

              {/* Contact */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Contact</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { href: "mailto:anshhchaurasiya@gmail.com", text: "Email" },
                    { href: "https://www.linkedin.com/in/ansh-chaurasia-6a437925a/", text: "LinkedIn" },
                    { href: "https://github.com/chaurasiaansh", text: "GitHub" }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 sm:p-5 rounded-xl bg-white/70 shadow-md hover:shadow-xl hover:scale-[1.03] transition text-center text-sm sm:text-base backdrop-blur-md"
                    >
                      <h3 className="font-semibold text-gray-800">{item.text}</h3>
                    </a>
                  ))}
                </div>
              </div>

              <hr className="my-6 border-gray-300 shadow-md transform hover:scale-105 transition-transform duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1)"
                }}
              />

              {/* Skills */}
              <div className="">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                  Skills
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 ">
                  {[
                    { name: "Data Analysis", desc: "Excel, SQL, NumPy, Pandas", icon: "📊" },
                    { name: "Visualization", desc: "Power BI, Matplotlib, Seaborn", icon: "📈" },
                    { name: "Machine Learning", desc: "ML & NLP", icon: "🤖" },
                    { name: "Programming", desc: "Python, HTML, CSS", icon: "💻" },
                    { name: "Databases", desc: "SQL, RDBMS", icon: "🗄️" }
                  ].map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-white shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform duration-200 border border-gray-100"
                    >
                      <div className="text-2xl sm:text-3xl mb-1">{skill.icon}</div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800">{skill.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 text-center leading-snug">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-6 border-gray-300 shadow-md transform hover:scale-105 transition-transform duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1)"
                }}
              />


              {/* Projects */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { title: "MCQs Generator", desc: "NLP-based multiple-choice question generator using Flask and LLMs." },
                    { title: "Personal Finance Planner", desc: "Finance management tool with tax calculator, retirement planner, FD estimator.", link: "https://personal-finance-project-zjayyxbpsbcsdhtezw94ag.streamlit.app" },
                    { title: "Analysis Using Excel & Power BI", desc: "Conducted sales analysis for Blinkit, created dashboards, and automated reporting using Power BI." }
                  ].map((proj, i) => (
                    <div key={i} className="p-4 sm:p-6 rounded-xl bg-white/70 shadow-md hover:shadow-xl transition backdrop-blur-md">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{proj.title}</h3>
                      <p className="text-gray-700 mt-2 text-sm sm:text-base">{proj.desc}</p>
                      {proj.link && (
                        <a href={proj.link} target="_blank" className="text-blue-600 hover:underline text-sm sm:text-base block mt-2">View Project</a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-6 border-gray-300 shadow-md transform hover:scale-105 transition-transform duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1)"
                }}
              />

              {/* Education */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Education</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                  {/* COLLEGE */}
                  <div className="p-4 sm:p-6 rounded-xl bg-white/70 shadow-md hover:shadow-xl transition backdrop-blur-md">
                    {/* Row for course + period */}
                    <div className="flex items-center justify-between">
                      {/* Course Name */}
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-1">
                        Bachelor of Technology (CSE - AIML)
                      </h3>
                      {/* Fixed Year Card */}
                      <div className="bg-blue-900 text-white w-[100px] h-[32px] flex items-center justify-center rounded-lg text-xs sm:text-sm font-medium shadow-sm ml-3">
                        2022 - 2026
                      </div>
                    </div>
                    {/* College Card */}
                    <div className="py-2">
                      <p className="text-gray-700 text-sm sm:text-base">
                        Lakshmi Narain College of Technology Excellence
                      </p>
                    </div>
                  </div>


                  {/* HIGH SCHOOL */}
                  <div className="p-4 sm:p-6 rounded-xl bg-white/70 shadow-md hover:shadow-xl transition backdrop-blur-md">
                    {/* Row for course + period */}
                    <div className="flex items-center justify-between">
                      {/* Course Name */}
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-1">
                        Higher Secondary (PCM)
                      </h3>
                      {/* Fixed Year Card */}
                      <div className="bg-blue-900 text-white w-[100px] h-[32px] flex items-center justify-center rounded-lg text-xs sm:text-sm font-medium shadow-sm ml-3">
                        2020 - 2022
                      </div>
                    </div>
                    {/* College Card */}
                    <div className="py-2">
                      <p className="text-gray-700 text-sm sm:text-base">
                        Jai Academy, Jhansi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-gray-300 shadow-md transform hover:scale-105 transition-transform duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1)"
                }}
              />

              {/* Certifications */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Certifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="p-4 sm:p-6 rounded-xl bg-white/70 shadow-md hover:shadow-xl transition backdrop-blur-md">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">NPTEL Python for Data Science</h3>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base">Silver Elite certification in Python for Data Science.</p>
                  </div>
                  <div className="p-4 sm:p-6 rounded-xl bg-white/70 shadow-md hover:shadow-xl transition backdrop-blur-md">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Scaler Python Course</h3>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base">Completed Python for Beginners (Mastering the Essentials).</p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );


};

export default About;
