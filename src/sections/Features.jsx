import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge"


const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div id="features" className="container py-10">

      <div className='pl-4 pb-4'><Badge variant="outline">Health ID</Badge></div>

      {/* Tab Indicator */}
      <div className="flex justify-start p-4">
        <div className="flex rounded-full shadow-md">
          <div
            className={`cursor-pointer py-2 px-4 mr-2 rounded-full ${
              activeTab === 1 ? 'bg-gray-800 text-white' : ''
            }`}
            onClick={() => handleTabClick(1)}
          >
            Problem
          </div>
          <div
            className={`cursor-pointer py-2 px-4 mr-2 rounded-full ${
              activeTab === 2 ? 'bg-gray-800 text-white' : ''
            }`}
            onClick={() => handleTabClick(2)}
          >
            Solution
          </div>
          {/* Add the third tab button */}
          <div
            className={`cursor-pointer py-2 px-4 rounded-full ${
              activeTab === 3 ? 'bg-gray-800 text-white' : ''
            }`}
            onClick={() => handleTabClick(3)}
          >
            Features
          </div>
          {/* Add more tabs as needed */}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {/* Content for Tab 1 */}
        {activeTab === 1 && (
          <div className="bg-primary p-8 rounded-3xl shadow aspect-w-4 aspect-h-3">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              <div>
                <h2 className="text-xl md:text-3xl font-bold text-background mb-4">This is a Problem</h2>
                <h1 className="text-3xl md:text-6xl font-bold mb-4">This is a problem introduction here</h1>
                <p className="py-4 mx-auto max-w-[700px] text-background md:text-xl ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div>
                <img
                  alt="f1"
                  className="mx-auto"
                  height="400"
                  src="assets/f1.png"
                  style={{
                    aspectRatio: "400/400",
                  }}
                  width="400"
                />
              </div>
            </div>

          </div>
        )}

        {/* Content for Tab 2 */}
        {activeTab === 2 && (
          <div className="bg-primary p-8 rounded-3xl shadow aspect-w-4 aspect-h-3">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              <div>
                <h2 className="text-xl md:text-3xl font-bold text-background mb-4">This is a solution</h2>
                <h1 className="text-3xl md:text-6xl font-bold mb-4">This is a solution introduction here</h1>
                <p className="py-4 mx-auto max-w-[700px] text-background md:text-xl ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div>
                <img
                  alt="f1"
                  className="mx-auto"
                  height="400"
                  src="assets/f1.png"
                  style={{
                    aspectRatio: "400/400",
                  }}
                  width="400"
                />
              </div>
            </div>

          </div>
        )}

        {/* Content for Tab 3 */}
        {activeTab === 3 && (
          <div className="bg-primary p-8 rounded-3xl shadow aspect-w-4 aspect-h-3">
            <h2 className="text-2xl font-bold mb-4">Tab 3 Content</h2>
            <p>Your content goes here.</p>
          </div>
        )}

        {/* Add more content for additional tabs */}
      </div>
    </div>
  );
};

export default Tab;
