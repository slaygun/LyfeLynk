import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  // Define your links at a single place in an array:
  const links = [
    { url: "/", text: "Home" },
    { url: "/about", text: "About" },
    { url: "/contact", text: "Contact" },
    { url: "/blog", text: "Blog" },
  ];

  return (
    <nav className="flex container justify-between items-center h-16 px-4 md:px-8">
      <div className="flex items-center">
        <Link to="/">
          <img src="your-logo.png" alt="LyfeLynk" className="w-8 h-8 mr-2" />
        </Link>
        <span className="text-xl font-bold">LyfeLynk</span>
      </div>
      <ul className="hidden md:flex space-x-4">
        {/* Render links dynamically using the array: */}
        {links.map((link) => (
          <li key={link.url}>
            <Link to={link.url} className="hover:underline">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <Button>Get Started</Button>
    </nav>
  );
};

export default Navbar;
