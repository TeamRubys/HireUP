function Header() {
    return (
      <div className="mx-auto mb-8 max-w-screen-2xl border-b border-grey-300 px-20 pt-4 pb-6">
        <div className="title flex flex-row items-center justify-between">
         <span className="title text-5xl font-bold">HireUP</span> 
          <div className="relative items-center bg-white md:flex">
            <div className="flex space-x-4 items-center ml-10">
              <div className="">
                <a href="" className="mx-auto underline mr-5 text-2xl">Find Talent</a>
              </div>
              <button className="px-10 py-3 border border-solid font-bold rounded-md">
                Log In
              </button>
              <button className="px-10 py-3 bg-black text-white font-bold rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  