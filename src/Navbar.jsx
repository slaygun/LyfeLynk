import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const links = [
    { id: 'vision', text: 'Vision' },
    { id: 'features', text: 'Features' },
    { id: 'about', text: 'About Us' },
    { id: 'contact', text: 'Contact Us' },
  ];

  // For scroll to Top
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // When scrolling change navbar color
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0); // Update state based on scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // State for menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`
      sticky top-0 z-20
      ${isScrolled ? 'backdrop-blur-xl backdrop-filter bg-background/50 shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="flex container justify-between items-center h-16 px-4 md:px-8">
        <div className="flex items-center">

          {/* Hamburger menu on smaller screens */}
          <div className="md:hidden flex items-center mr-2">
            <Button variant="secondary" onClick={handleMenuClick}>
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {/* LyfeLynk logo and name */}
          <Link className = "flex cursor-pointer" onClick={handleLogoClick} to="/">
            <img src="/assets/lyfelynk.svg" alt="LyfeLynk" className="w-8 h-8 mr-2" />
          <span className="text-2xl font-bold">LyfeLynk</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                offset={-100}
                //activeClass="active"
              >
                <button className='px-6 hover:text-gray-300'>{link.text}</button>
              </Link>
            </li>
          ))}
        </ul>

        {/* "Get Started" button */}
        <Button>Get Started</Button>

        {/* Navigation Menu (conditionally rendered) */}
        <div
          className={`absolute top-full left-0 w-full bg-background border-y-2 border-primary transition-all duration-200
            ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="space-y-4 p-6">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-200}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  className="cursor-pointer text-bold"
                >
                  <div>
                    {link.text}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
