import React from 'react';

function Header(props: { setPage: Function, page: number }) {
    const { setPage, page } = props;
  
    const handleTogglePage = () => {
      setPage(page === 0 ? 1 : 0);
    }
  
    return (
      <div className="mx-auto mb-8 max-w-screen-2xl border-b border-gray-300 px-6 pt-4 pb-6 lg:px-20">
        <div className="title flex flex-row items-center justify-between">
          <span id="logo" className="title text-4xl font-bold cursor-pointer">HireUp</span> 
          <div className="relative items-center bg-white md:flex">
            <div className="flex space-x-4 items-center ml-10">
              <div className="">
                <a
                  className="mx-auto underline mr-5 text-xl hover:text-blue-500 cursor-pointer"
                  onClick={handleTogglePage}
                >
                  {page === 0 ? 'Find Freelancers' : 'Find Work'}
                </a>
              </div>
              <button className="hover:bg-blue-100 px-10 py-2 border border-solid border-black font-bold rounded-md">
                Log In
              </button>
              <button className="hover:bg-blue-500 px-20 py-2 bg-black text-white font-bold rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default Header;
