import { Facebook } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';


function Footer() {
  return (
    <div className="bg-gray-900 py-10 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="py-4 flex items-center">
            <img src="/assets/lyfelynk.svg" alt="LyfeLynk Logo" className="w-8 h-8 mr-2" />
            <a href="/" className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">
              LyfeLynk
            </a>
          </div>
          <p className=" text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a className=" text-gray-500  hover:text-primary  mb-1" href="#">
            About Us
          </a>
          <a className=" text-gray-500  hover:text-primary  mb-1" href="#">
            Services
          </a>
          <a className=" text-gray-500  hover:text-primary  mb-1" href="#">
            Contact Us
          </a>
          <a className=" text-gray-500  hover:text-primary  mb-1" href="#">
            Help Center
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#">
              <Mail className="h-6 w-6  text-gray-500  hover:text-primary " />
            </a>
            <a href="#">
              <Facebook className="h-6 w-6  text-gray-500  hover:text-primary " />
            </a>
            <a href="#">
              <Twitter className="h-6 w-6  text-gray-500  hover:text-primary " />
            </a>
            <a href="#">
              <Linkedin className="h-6 w-6  text-gray-500  hover:text-primary " />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center  text-gray-500 text-sm">
        © 2024 LyfeLynk All rights reserved.
      </div>
    </div>
  )
}


export default Footer;