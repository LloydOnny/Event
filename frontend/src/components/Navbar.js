import React from "react";

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex-shrink-0'>
            <span className='text-2xl font-bold text-secondary'>
              Campus Events
            </span>
          </div>

          <div className='hidden sm:flex sm:space-x-8'>
            <a
              href='/events'
              className='text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors'
            >
              Events
            </a>
            <a
              href='/login'
              className='text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors'
            >
              Login
            </a>
            <a
              href='/register'
              className='text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors'
            >
              Register
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='sm:hidden'>
            <button className='p-2 rounded-md text-gray-400 hover:text-gray-500'>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
