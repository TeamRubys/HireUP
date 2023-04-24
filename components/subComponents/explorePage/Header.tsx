function Header() {
    return (
      <div className="mx-auto mb-8 max-w-screen-xl border-b border-grey-300 px-6 pt-4 pb-6 lg:px-20">
        <div className="title flex flex-row items-center justify-between">
         <span className="title text-5xl font-bold">HireUP</span> 
          <div className="relative items-center bg-white md:flex">
            <div className="flex space-x-4 items-center ml-10">
              <div className="">
                <a href="" className="mx-auto">Find Freelancers</a>
              </div>
              <button className="px-4 py-2 border border-solid rounded-md">
                Log In
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  