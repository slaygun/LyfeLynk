import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const Features4 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tabImages = [
    "https://picsum.photos/300/200?image=1",
    "https://picsum.photos/300/200?image=2",
    "https://picsum.photos/300/200?image=3",
  ];

  const tabNames = ["Tech1", "Tech2", "Tech3"];

  const tabContent = [
    "Content for Tech 1: This is the content for the first tab. It includes details about the first technology.",
    "Different content for Tech 2: Explanation for the second tab. Here you can provide information about the second technology.",
    "Unique content for Tech 3: Description for the third tab. This section contains details about the third technology.",
  ];

  return (
    <AnimatedSection>
      <section className='container py-10'>
        <div className="container py-10 flex flex-col lg:flex-row bg-primary rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
          {/* Content Column */}
          <div className="lg:flex-1 lg:w-1/2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tech Stack</h1>

            {/* Tab Indicator */}
            <div className="py-4 flex justify-start flex-wrap">
              <div className="flex px-2 rounded-full shadow-md bg-black">
                {Array.from({ length: 3 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className={`cursor-pointer py-2 mb-2 mr-2 rounded-2xl sm:mb-0 sm:mr-2`}
                    onClick={() => handleTabClick(index + 1)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`relative py-2 px-3 rounded-full text-white ${
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
                      <span className={`relative z-10 text-sm`}>
                        {tabNames[index]}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-2 lg:h-full">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className={`h-1/2 ${activeTab === index + 1 ? '' : 'hidden'}`}>
                  <p className='md:text-xl'>
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
