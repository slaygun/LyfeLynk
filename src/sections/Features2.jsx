import React, { useState } from 'react';

const Features2 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // Array of image URLs corresponding to each tab
  const tabImages = [
    "https://picsum.photos/300/200?image=1",
    "https://picsum.photos/300/200?image=2",
    "https://picsum.photos/300/200?image=3",
  ];

  return (
    <div id="features" className="container py-10 flex flex-col lg:flex-row">
      {/* Content Column */}
      <div className="lg:flex-1 lg:w-1/2">
        <div className="pl-4 pb-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">Tech Stack</h1>
        </div>

        {/* Tab Indicator */}
        <div className="flex justify-start p-2">
          <div className="flex rounded-full shadow-md">
            <div
              className={`cursor-pointer py-2 px-3 mr-2 rounded-full ${
                activeTab === 1 ? 'bg-gray-800 text-white' : ''
              }`}
              onClick={() => handleTabClick(1)}
            >
              Tech 1
            </div>
            <div
              className={`cursor-pointer py-2 px-3 mr-2 rounded-full ${
                activeTab === 2 ? 'bg-gray-800 text-white' : ''
              }`}
              onClick={() => handleTabClick(2)}
            >
              Tech 2
            </div>
            {/* Add the third tab button */}
            <div
              className={`cursor-pointer py-2 px-3 rounded-full ${
                activeTab === 3 ? 'bg-gray-800 text-white' : ''
              }`}
              onClick={() => handleTabClick(3)}
            >
              Tech 3
            </div>
            {/* Add more tabs as needed */}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-2 lg:h-full">
          {/* Content for Tab 1 */}
          {activeTab === 1 && (
            <div className="bg-background h-1/2">
              <p className='md:text-xl'>
              Internet Computer Protocol is a blockchain network that aims to bring greater efficiency, speed and decentralization
               to computation and data storage. The project aims to address shortcomings associated with the traditional Internet, 
               such as monopolization of services, poor systems security and misuse of personal data.</p>
            </div>
          )}

          {/* Content for Tab 2 */}
          {activeTab === 2 && (
            <div className="bg-background h-1/2 ">
              <p className='md:text-xl'>ICP's basic idea is to create a new kind of decentralized internet and global computing system — 
              where independent data centers all over the world could join together to create an alternative to the cloud services 
              (from companies like Amazon Web Services and Google Cloud) that power most of the current internet.</p>
            </div>
          )}

          {/* Add more content for additional tabs */}
        </div>
      </div>

      {/* Image Column */}
      <div className="lg:flex-shrink-0 lg:w-1/2 mt-2 lg:mt-0">
        <img src={tabImages[activeTab - 1]} alt="Technologies Used" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default Features2;
