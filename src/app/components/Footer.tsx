import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-600 body-font mt-[100px]">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* Logo and Title */}
        <Link
          href="#"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-indigo-500 transition-colors duration-300"
        >
          <span className="ml-3 text-xl font-bold">Hamza Sheikh</span>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          ©copy Right 2025 Made with 💘 By Hamza Sheikh
        </p>

        {/* Social Icons */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4  space-x-3 text-xl justify-center sm:justify-start">
          <Link
            href="https://www.linkedin.com/in/sheikh-muhammad-hamza-b20b8a31a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-black" />
          </Link>

          <Link
            href="https://github.com/Hamzasheikh8669"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-black" />
          </Link>

          <Link
            href="https://github.com/Hamzasheikh8669"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-black" />
          </Link>

          <Link
            href="https://github.com/Hamzasheikh8669"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareFacebook className="hover:text-black" />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
