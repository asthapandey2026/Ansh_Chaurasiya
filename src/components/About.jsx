import React, { useState } from "react";

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
    <div className="bg-blue-50 text-gray-900 mt-6 min-h-screen flex flex-col">
      <div className="flex-grow flex justify-center items-center p-10">
        <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-6xl border border-gray-300">

          {/* Resume Download Button */}
          <div className="text-right mb-4">
            <button
              onClick={handleResumeDownload}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium shadow-lg transition-transform transform hover:scale-105"
            >
              📄 Download Resume
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
            <img
              src="/profile-pic ansh.png"
              alt="Ansh Chaurasiya"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg"
            />
            <div className="md:ml-10 text-center md:text-left mt-6 md:mt-0">
              <h1 className="text-4xl font-bold text-blue-700">Ansh Chaurasiya</h1>
              <p className="text-lg text-gray-700 mt-2">Machine Learning & AI Enthusiast | Web Developer</p>

              {/* Objective Section */}
              <div className="mt-4 text-gray-600">
                <p>
                  Passionate about developing intelligent systems and creating intuitive web experiences.
                  Constantly learning and improving.
                </p>
                {!showFullAbout ? (
                  <button
                    onClick={() => setShowFullAbout(true)}
                    className="text-blue-700 hover:text-red-600 text-xl mt-4 block"
                  >
                    Read More...
                  </button>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                      <div className="p-6 rounded-lg shadow-md bg-blue-100 hover:shadow-lg transition">
                        <h2 className="text-2xl font-semibold text-blue-600">Contact</h2>
                        <p className="mt-3 text-gray-800">📧 Email: anshhchaurasiya@gmail.com</p>
                        <p className="text-gray-800">🔗 LinkedIn: linkedin.com/in/anshchaurasiya</p>
                        <p className="text-gray-800">💻 GitHub: github.com/anshchaurasiya</p>
                      </div>
                      <div className="p-6 rounded-lg shadow-md bg-blue-100 hover:shadow-lg transition">
                        <h2 className="text-2xl font-semibold text-blue-600">Skills</h2>
                        <p className="mt-3 text-gray-800">
                          Data Analysis: Excel, SQL, Python (NumPy, Pandas), Matplotlib, Seaborn <br />
                          Data Visualization: Power BI <br />
                          Machine Learning & NLP: Basic ML & NLP techniques <br />
                          Programming: Python, HTML, CSS <br />
                          Database Management: SQL, Relational Databases
                        </p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h2 className="text-3xl font-semibold text-blue-700">Projects</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
                          <h3 className="text-xl font-semibold text-blue-600">MCQs Generator</h3>
                          <p className="text-gray-700 mt-2">
                            Developed an NLP-based multiple-choice question generator using Flask and LLMs for content optimization.
                          </p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
                          <h3 className="text-xl font-semibold text-blue-600">Personal Finance Planner</h3>
                          <p className="text-gray-700 mt-2">
                            A Python-based finance management tool with tax calculator, retirement planner, and FD estimator.
                            <br />
                            <a
                              href="https://personal-finance-project-zjayyxbpsbcsdhtezw94ag.streamlit.app"
                              target="_blank"
                              className="text-blue-500 hover:underline"
                            >
                              🔗 View Project
                            </a>
                          </p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
                          <h3 className="text-xl font-semibold text-blue-600">Analysis Using Excel & Power BI</h3>
                          <p className="text-gray-700 mt-2">
                            Conducted sales analysis for Blinkit, created dashboards, and automated reporting using Power BI.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h2 className="text-3xl font-semibold text-blue-700">Education</h2>
                      <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition mt-4">
                        <p className="text-gray-800">
                          🎓 <strong>Bachelor of Technology (CSE - AIML)</strong> <br />
                          Lakshmi Narain College of Technology Excellence, Bhopal <br />
                          Year of Completion: 2026
                        </p>
                      </div>
                      <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition mt-4">
                        <p className="text-gray-800">
                          🎓 <strong>Class 12th (PCM)</strong> <br />
                          Jai Academy, Jhansi <br />
                          Year of Completion: 2022
                        </p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h2 className="text-3xl font-semibold text-blue-700">Certifications</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
                          <h3 className="text-xl font-semibold text-blue-600">NPTEL Python for Data Science</h3>
                          <p className="text-gray-700">Earned Silver Elite certification in Python for Data Science.</p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition">
                          <h3 className="text-xl font-semibold text-blue-600">Scaler Python Course</h3>
                          <p className="text-gray-700">Completed Python for Beginners (Mastering the Essentials).</p>
                        </div>
                      </div>
                    </div>

                    {/* Hide Button */}
                    <button
                      onClick={() => setShowFullAbout(false)}
                      className="text-blue-700 hover:text-red-600 text-xl mt-4 block"
                    >
                      Show less
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
