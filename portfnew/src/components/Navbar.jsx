import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import "../index.css";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { navLinksdata } from "../constants/index";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-20 sticky top-0 left-0 right-0 z-50 bg-[var(--color-body)] border-b border-gray-600/30">
      {/* Main Navigation Container */}
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Desktop Navigation - Centered with Design */}
        <nav className="hidden md:block w-full">
          <ul className="flex items-center justify-center gap-8">
            {navLinksdata.map(({ _id, title, link }) => (
              <li 
                className="relative group px-2 py-1" 
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-lg font-medium text-gray-300 hover:text-[var(--color-designColor)] transition-all duration-300"
                >
                  {title}
                </Link>
                <span className="absolute bottom-0 left-1/2 h-0.5 bg-[var(--color-designColor)] w-0 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className=" md:hidden text-2xl bg-black/80 w-12 h-12 flex items-center justify-center rounded-full text-[var(--color-designColor)] cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <FiMenu />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMenu && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShowMenu(false)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              />

              {/* Sidebar Panel */}
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-72 h-screen bg-[var(--color-body)]/95 backdrop-blur-lg text-white z-50 p-8 shadow-2xl border-r border-gray-600/30"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowMenu(false)}
                  className="absolute top-6 right-6 text-2xl text-gray-300 hover:text-[var(--color-designColor)] hover:rotate-90 transition-all duration-300"
                >
                  <MdClose />
                </button>

                {/* Content */}
                <div className="flex flex-col gap-12 mt-24">
                  {/* Nav Links */}
                  <ul className="flex flex-col gap-6">
                    {navLinksdata.map((item) => (
                      <li
                        key={item._id}
                        className="group"
                      >
                        <Link
                          onClick={() => setShowMenu(false)}
                          activeClass="active"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="text-xl font-medium text-gray-300 hover:text-[var(--color-designColor)] transition-all duration-300 flex items-center gap-3"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--color-designColor)] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Socials */}
                  <div className="flex flex-col gap-6">
                    <h2 className="text-sm uppercase tracking-widest text-gray-400">
                      Find Me In
                    </h2>
                    <div className="flex gap-5">
                      {[FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="w-12 h-12 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-xl text-white hover:bg-[var(--color-designColor)]/20 hover:scale-105 transition-all duration-300 border border-gray-600/30"
                        >
                          <Icon className="text-lg" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;