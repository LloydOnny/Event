import React from "react";

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='bg-white rounded-lg shadow-md p-8 text-center'>
          <h1 className='text-4xl font-bold text-secondary mb-4'>
            Welcome to Campus Events
          </h1>
          <p className='text-xl text-gray-600 mb-8'>
            Discover and join exciting events happening around your campus
          </p>
          <button className='bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition-colors'>
            Explore Events
          </button>
        </div>

        {/* Featured Events Section */}
        <div className='mt-16'>
          <h2 className='text-3xl font-bold text-secondary mb-8'>
            Featured Events
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Event Card Example */}
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <div className='h-48 bg-gray-200'></div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-secondary mb-2'>
                  Tech Conference 2024
                </h3>
                <p className='text-gray-600 mb-4'>
                  Join us for an amazing tech conference with industry experts.
                </p>
                <div className='flex items-center text-sm text-gray-500'>
                  <svg
                    className='h-5 w-5 mr-2'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'></path>
                  </svg>
                  <span>March 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
