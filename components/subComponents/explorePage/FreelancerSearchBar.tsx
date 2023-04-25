function FreelancerSearchBar({}) {
    return (
      <div>
        <div id="list-header" className="text-4xl font-bold mx-auto mb-8 max-w-screen-2xl">
            Search Freelancers
        </div>
        <div id="search-bar" className="mx-auto items-center justify-start flex flex-row font-bold text-2xl mb-5">
          <div className="flex w-3/4">
            <select id="roles" className="w-1/3 text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="" disabled selected>
                Service Roles
              </option>
              <option value="option1">Software Engineer</option>
              <option value="option2">Product Manager</option>
              <option value="option3">Web Designer</option>
            </select>
            <select id="location" className="w-1/3 text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Freelancer's location</option>
              <option value="option1">Remote</option>
              <option value="option2">San Francisco, CA</option>
              <option value="option3">New York, NY</option>
            </select>
            <select id="price" className="w-1/3 text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Budget</option>
              <option value="option1">$1 to $1000</option>
              <option value="option2">$1000 to $5000</option>
              <option value="option3">$5000 and above</option>
            </select>
          </div>
          <div className="flex justify-center w-1/4">
            <button className="bg-black text-white rounded-lg py-2 px-10 hover:bg-blue-700">
              Propose Work
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default FreelancerSearchBar;
  