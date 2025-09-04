import { useEffect, useState } from "react";

const EyeTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateEyePosition = (eyeX, eyeY) => {
    const dx = position.x - eyeX;
    const dy = position.y - eyeY;
    const angle = Math.atan2(dy, dx);
    return {
      transform: `translate(${Math.cos(angle) * 10}px, ${Math.sin(angle) * 10}px)`,
    };
  };

  return (
    <div className="flex space-x-20 my-6">
      <div className="relative w-16 h-16  bg-white rounded-full flex items-center justify-center shadow-lg border-1 border-black">
        <div
          className="w-6 h-6 bg-black rounded-full"
          style={calculateEyePosition(window.innerWidth / 2 - 50, window.innerHeight / 2)}
        ></div>
      </div>
      <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-1 border-black">
        <div
          className="w-6 h-6 bg-black rounded-full"
          style={calculateEyePosition(window.innerWidth / 2 + 50, window.innerHeight / 2)}
        ></div>
      </div>
    </div>
  );
};

export default EyeTracker;
