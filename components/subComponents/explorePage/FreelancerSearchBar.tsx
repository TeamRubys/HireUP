function FreelancerSearchBar({setCurrentPage, setRole, setLocation, setPrice}) {
    const handleProposeClick = () => {
      setCurrentPage(5)
    }

    const handleRoleChange = (e) => {
      setRole(e.target.value)
    }

    const handleLocationChange = (e) => {
      setLocation(e.target.value)
    }

    const handlePriceChange = (e) => {
      setPrice(e.target.value)
    }

    return (
      <div>
        <div id="list-header" className="text-4xl font-bold mx-auto mb-5 max-w-screen-2xl">
          Search Freelancers
        </div>
        <div id="search-bar" className="mx-auto items-center justify-start flex flex-row font-bold text-2xl mb-5">
          <div className="flex w-3/4">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select a role
              </label>
              <select
                id="roles"
                className="text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleRoleChange}
              >
                <option value="">any service role</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Web Designer">Web Designer</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select a location
              </label>
              <select
                id="location"
                className="text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleLocationChange}
              >
                <option value="">any location</option>
                <option value="Remote">Remote</option>
                <option value="San Francisco, CA">San Francisco, CA</option>
                <option value="New York, NY">New York, NY</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select a price range
              </label>
              <select
                id="price"
                className="text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handlePriceChange}
              >
                <option value="">any price range</option>
                <option value="$1 to $1000">$1 to $1000</option>
                <option value="$1000 to $5000">$1000 to $5000</option>
                <option value="$5000 and above">$5000 and above</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center w-1/4">
            <button className="mt-8 bg-black text-lg text-white rounded-lg py-3 px-20 hover:bg-blue-700" onClick={handleProposeClick}>
              Propose Jobs
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default FreelancerSearchBar;
  