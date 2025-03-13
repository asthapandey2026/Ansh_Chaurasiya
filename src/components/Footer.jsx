import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const smoothScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Ansh Chaurasiya</h3>
            <p className="text-sm text-gray-400">
              Passionate about AI, ML, and web development. Dedicated to building innovative solutions that bridge technology with real-world applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4  pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#projects" className="hover:text-blue-400 transition-all" onClick={(e) => smoothScroll(e, "projects")}>Projects</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-all">About Me</a></li>
              <li><a href="/" className="hover:text-blue-400 transition-all">Home</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4  pb-2 inline-block">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <span>+91 7985530689</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:chaurasiaansh968@gmail.com" className="hover:text-blue-400">chaurasiaansh968@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Jhansi, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 pb-2 inline-block">Connect with Me</h4>
            <div className="flex space-x-4 mt-3">
              <a href="https://www.facebook.com/profile.php?id=61573108866620" className="hover:text-blue-400 transition-all">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/anshhchaurasiya?igsh=MWpqbTloN3E1N3Rj" className="hover:text-blue-400 transition-all">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ansh-chaurasia-6a437925a" className="hover:text-blue-400 transition-all">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/chaurasiaansh" className="hover:text-blue-400 transition-all">
                <FaGithub size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Gradient Divider */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-900 to-transparent my-8"></div>

        {/* Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ansh Chaurasiya. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
