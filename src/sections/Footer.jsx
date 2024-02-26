import { Button } from "@/components/ui/button"
import { Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-scroll';


export default function Footer() {

  const links = [
    { id: 'idea', text: 'Idea' },
    { id: 'features', text: 'Features' },
    { id: 'about', text: 'About Us' },
    { id: 'contact', text: 'Contact Us' },
  ];
  
  return (
    <footer className=" text-white p-10">

      <div className="border-t border-gray-600 mt-8 py-4"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <div>
          
          <div className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <img src="/assets/lyfelynk.svg" alt="LyfeLynk Logo" className="w-8 h-8 mr-2" />
            <a href="/" className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">
              LyfeLynk
            </a>
          </div>
          <p className="text-gray-400">
            Digitally Linking Your Health.
            <br></br>
            © 2024 LyfeLynk All rights reserved.
          </p>
        </div>
        
        <div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul>
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      //activeClass="active"
                    >
                      <button className="text-gray-400 hover:text-gray-300 cursor:pointer">{link.text}</button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
              <a
                href="https://twitter.com/lyfelynk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 w-8 h-8 p-2 object-cover rounded-sm cursor-pointer"
              >
                <img src="/assets/X.svg" alt="X" />
              </a>
                <a className="text-black bg-blue-500 hover:bg-blue-600 p-2 object-cover rounded-sm" href="https://www.instagram.com/lyfelynk/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
