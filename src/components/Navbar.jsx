import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
      <div className="flex items-center flex-shrink-0">
        <img className="w-10 mx-2" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/ridhoramadhan99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/RidhoRamadhan99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/codewithdho/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
