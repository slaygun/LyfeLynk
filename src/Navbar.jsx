// Navbar.jsx
import React, { useState , useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const links = [
    { id: 'idea', text: 'Idea' },
    { id: 'features', text: 'Features' },
    { id: 'about', text: 'About Us' },
    { id: 'contact', text: 'Contact Us' },
  ];

  //For scroll to Top
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //When scrolling change navbar color
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0); // Update state based on scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <nav className={`
      sticky top-0 z-10
      ${isScrolled ? 'backdrop-blur-xl backdrop-filter bg-background/50 shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="flex container justify-between items-center h-16 px-4 md:px-8">

        <div className="flex items-center">
          <Link onClick={handleLogoClick} to="/">
            <img src="/assets/lyfelynk.svg" alt="LyfeLynk" className="w-8 h-8 mr-2" />
          </Link>
          <span className="text-2xl font-bold">LyfeLynk</span>
        </div>

        <ul className="hidden md:flex space-x-4">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
              >
                <Button variant="ghost">{link.text}</Button>
              </Link>
            </li>
          ))}
        </ul>

        <Button>Get Started</Button>

      </div>
    </nav>
  );
};

export default Navbar;
