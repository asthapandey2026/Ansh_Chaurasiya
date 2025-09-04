import { useEffect, useState } from "react";

export default function Intro() {
    const roles = [
        "Data Analysis",
        "Data Visualization",
        "Python Programming",
    ];

    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = roles[roleIndex];
        let typingSpeed = isDeleting ? 50 : 120;

        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentWord.length) {
                setCurrentRole(currentWord.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setCurrentRole(currentWord.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    const smoothScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Hi, I'm <span className="text-blue-400">Ansh Chaurasiya</span>
            </h1>

            {/* Animated tagline */}
            <p className="text-base sm:text-lg mt-4 max-w-lg">
                Aspiring Machine Learning & AI Enthusiast |<br /> Learning {" "}
                <span className="text-blue-400">{currentRole}</span>
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-row gap-4 justify-center flex-wrap">
                <button
                    onClick={() => smoothScroll("projects")}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg transition-transform transform hover:scale-105"
                >
                    View Projects
                </button>

                <button
                    onClick={() => smoothScroll("contact")}
                    className="ml-4 border-2 border-blue-400 hover:bg-blue-400 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg transition-transform transform hover:scale-105"
                >
                    Contact Me
                </button>

            </div>

        </div>
    );
}
