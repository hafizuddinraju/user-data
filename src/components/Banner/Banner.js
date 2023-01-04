import React from 'react';

export const Banner = ({setQuery}) => {
    return (
      <div className="relative bg-sky-400">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl sm:leading-none">
            Dynamically procrastinate out-of-the-box 
              <br className="hidden md:block" />
              e-tailers via {' '}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-teal-900">granular infomediaries</span>
              </span>
            </h2>
            <p className="mb-6 text-base text-indigo-100 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo. Sed ut perspiciatis unde omnis.
            </p>
            
            <div className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Name"
                required
                type="text"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                className="flex-grow mt-6 w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              
              
            </div>
            <div className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Domain"
                required
                type="text"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                className="flex-grow mt-6 w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              
              <div className="form-control w-full px-3 max-w-xs">
                    <label className="label"> <span className="label-text font-semibold text-white">Gender</span></label>
                    <select 
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    className="select input-bordered rounded-md py-3 px-3 w-full max-w-xs">
                        
                             <option>Select Gender</option>
                             <option>Female</option>
                             <option>Male</option>
                             <option>Agender</option>
                             <option>Bigender</option>
                        
                        
                        
                    </select>
                </div>
              
              
            </div>
            
            
          </div>
        </div>
      </div>
    );
  };

export default Banner;