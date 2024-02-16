import React from 'react';

function Features() {
  return (
    <section className='py-12'>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">This is a Feature Advantage</h2>
            <h1 className="text-6xl font-bold mb-4">This is a feature introduction here</h1>
            <p className="py-4 mx-auto max-w-[700px] text-gray-500 md:text-xl ">
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

      <div className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

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

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">This is a Feature Advantage</h2>
            <h1 className="text-6xl font-bold mb-4">This is a feature introduction here</h1>
            <p className="py-4 mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

        </div>

        </div> 

      <div class="circlePosition w-full h-full bg-[#36a0d142] rounded-[100%] absolute -z-10 blur-[100px] flex justify-center items-center">
        <div class="circle w-[17rem] h-[17rem] bg-[#26b9fd42] rounded-[100%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-4 text-center">
            Big Feature Display
          </h1>
          <p className="py-4 mx-auto max-w-[700px] text-gray-500 md:text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="w-full">
            <img
              alt="Astro Architecture"
              className="w-full h-auto"
              src="assets/Dashboard.png"
              style={{
                aspectRatio: "1280/720",
                objectFit: "cover",
              }}

            />
          </div>
        </div>
      </div>

    </section>
  )
}


export default Features