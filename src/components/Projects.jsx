import { FaRobot, FaChartBar, FaMoneyBillWave } from "react-icons/fa";

const projectDomains = [
    {
        domain: "AI & NLP",
        icon: <FaRobot className="text-lg text-white" />,
        projects: [
            {
                title: "MCQs Generator Using NLP and Flask",
                description:
                    "A multiple-choice question generator using NLP, integrated with LLMs for better content quality, and built with Flask.",
                link: "https://github.com/chaurasiaansh/Quiz-genrator",
            },
            {
                title: "AI Senior",
                description:
                    "A 24/7 AI-powered academic mentor offering study notes, interview prep, and personalized learning support.",
                link: "https://github.com/chaurasiaansh/AI-Senior",
            },
        ],
    },
    {
        domain: "Data Analytics & Visualization",
        icon: <FaChartBar className="text-lg text-white" />,
        projects: [
            {
                title: "Analysis Using Excel and Power BI",
                description:
                    "Analyzed Blinkit's sales data, created profit and sales visualizations, and designed dashboards for automated reporting.",
                link: "https://github.com/chaurasiaansh/powerbi.git",
            },
        ],
    },
    {
        domain: "Finance & Tools",
        icon: <FaMoneyBillWave className="text-lg text-white" />,
        projects: [
            {
                title: "Personal Finance Planner",
                description:
                    "A Python-based finance management tool with FD calculator, retirement planner, tax calculator, and financial strategies.",
                link: "https://personal-finance-project-zjayyxbpsbcsdhtezw94ag.streamlit.app/",
            },
        ],
    },

];

export default function Projects() {
    return (
        <div className="bg-gray-50 py-16 px-6 md:px-20" id="projects">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 text-center">
                    My Projects
                </h2>
                <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
                    Explore my work across different domains — AI, Data Analytics, and
                    Tools. Each project reflects my hands-on learning and problem-solving
                    skills.
                </p>
            </div>

            {/* Responsive Grid for Domains */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectDomains.map((domain, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-6">

                        {/* Domain Header */}
                        <div className="flex items-center gap-3 mb-5 pl-4 border-l-4 border-blue-600">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md">
                                {domain.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 tracking-wide">
                                {domain.domain}
                            </h3>
                        </div>

                        {/* Horizontal Scrollable Projects */}
                        <div className="mt-5 overflow-x-auto hide-scrollbar scroll-smooth">
                            <div className="flex gap-4">
                                {domain.projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="min-w-[180px] max-w-[200px] h-[160px] bg-gray-100 rounded-lg p-3 hover:bg-blue-50 hover:shadow-lg transition flex-shrink-0 flex flex-col justify-between"
                                    >
                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm">
                                                {project.title}
                                            </h4>
                                            <p className="text-gray-600 text-xs mt-1 line-clamp-3">
                                                {project.description}
                                            </p>
                                        </div>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                className="text-blue-600 text-xs font-medium hover:underline mt-2 inline-block"
                                            >
                                                View →
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom CSS for hiding scrollbar */}
            <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}
