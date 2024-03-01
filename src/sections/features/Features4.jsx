import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { Badge } from "@/components/ui/badge"

const Features4 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tabImages = [
    "/assets/feature_pics/f4-1.png",
    "/assets/feature_pics/f4-2.png",
    "/assets/feature_pics/f4-3.png",
  ];

  const tabNames = ["Dfinity", "VETKeys", "ABDM"];

const tabContent = [
  (
    <div>
      <Badge className = "font-medium border border-indigo-400" variant = "secondary">Internet Computer (Dfinity)</Badge>
      
      <h1 className="text-xl md:text-2xl font-bold text-white py-4">
      Built on the Blockchain for Unmatched Security & Scalability
      </h1>
      <p>
      Lyfelynk leverages the power of the Internet Computer blockchain, 
      providing decentralized infrastructure that guarantees the utmost 
      security and scalability for your sensitive health data.
      </p>
    </div>
  ),
  (
    <div>
      <Badge className = "font-medium border border-indigo-400" variant = "secondary">VETKeys</Badge>
      <h1 className="text-xl md:text-2xl font-bold text-white py-4">
        Privacy by Design with VETKeys
      </h1>      
      <p>
      Lyfelynk employs cutting-edge VETKeys technology to ensure your health 
      data remains anonymous while empowering medical research. VETKeys enable 
      advanced encryption and secure sharing without compromising your privacy.      
      </p>
    </div>
  ),
  (
    <div>
      <Badge className = "font-medium border border-indigo-400" variant = "secondary">Ayushman Bharat Digital Mission</Badge>
      <h1 className="text-xl md:text-2xl font-bold text-white py-4">
        Aligning with India's Healthcare Vision
      </h1>      
      <p>
      Lyfelynk proudly integrates with the ABDM framework, empowering you to contribute 
      your health data to support nation-wide healthcare advancement. Your participation 
      plays a vital role in driving research and improving healthcare delivery for all Indians.
      </p>
    </div>
  ),
];


  return (
    <AnimatedSection>
      <section className='container py-10'>
        <div className="container py-10 flex flex-col lg:flex-row bg-primary rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
          {/* Content Column */}
          <div className="lg:flex-1 lg:w-1/2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tech Stack</h1>

            {/* Tab Indicator */}
            <div className="pt-4 flex justify-start flex-wrap">
              <div className="flex px-2 rounded-full shadow-md bg-black">
                {Array.from({ length: 3 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className={`cursor-pointer py-2 mb-2 mr-2 rounded-2xl sm:mb-0 sm:mr-2`}
                    onClick={() => handleTabClick(index + 1)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`relative flex items-center py-2 px-3 rounded-full text-white ${
                        activeTab === index + 1 ? 'bg-gray-800' : ''
                      }`}
                    >
                      {activeTab === index + 1 && (
                        <motion.div
                          layoutId="clickedbutton"
                          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                          className={`absolute inset-0 light:bg-gray-200 bg-gray-800 rounded-full`}
                        />
                      )}
                      <span className={`relative z-10 text-sm md:text-md`}>
                        {tabNames[index]}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-2 md:pr-8 lg:h-full">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className={`h-1/2 ${activeTab === index + 1 ? '' : 'hidden'}`}>
                  <p className='text-sm md:text-xl'>
                    {tabContent[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="shadow-[7px_7px_153px_10px_rgba(45,_72,_210,_0.52)] lg:flex-shrink-0 lg:w-1/2 mt-2 lg:mt-0">
            <img src={tabImages[activeTab - 1]} alt="Technologies Used" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Features4;
