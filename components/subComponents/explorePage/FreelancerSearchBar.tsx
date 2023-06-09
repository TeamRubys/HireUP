function FreelancerSearchBar({
  setCurrentPage,
  setRole,
  setLocation,
  setPrice,
  isLoggedIn,
}) {
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleProposeClick = () => {
    if (isLoggedIn) {
      setCurrentPage(5);
    } else {
      alert("Please login or sign up to use website features");
    }
  };

  return (
    <div>
      <div
        id="list-header"
        className="text-4xl font-bold mx-auto mb-5 max-w-screen-2xl"
      >
        Search Freelancers
      </div>
      <div
        id="search-bar"
        className="mx-auto items-center justify-start flex flex-row font-bold text-2xl mb-5"
      >
        <div className="flex w-3/4">
          <div className="w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select a role
            </label>
            <select
              id="roles"
              className="text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-black block p-2.5"
              onChange={handleRoleChange}
            >
              <option value="">any service role</option>
              <option value="Back End Engineer">Back End Engineer</option>
              <option value="Front End Engineer">Front End Engineer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="UI Designer">UI Designer</option>
              <option value="Web Designer">Web Designer</option>
            </select>
          </div>
          <div className="w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select a location
            </label>
            <select
              id="location"
              className="text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-black block p-2.5"
              onChange={handleLocationChange}
            >
              <option value="">any location</option>
              <option value="Remote">Remote</option>
              <option value="Austin, Texas">Austin, TX</option>
              <option value="Atlanta, GA">Atlanta, GA</option>
              <option value="Boston, MA">Boston, MA</option>
              <option value="Chicago, IL">Chicago, IL</option>
              <option value="Denver, CO">Denver, CO</option>
              <option value="New York, NY">New York, NY</option>
              <option value="Portland, OR">Portland, OR</option>
              <option value="San Francisco, CA">San Francisco, CA</option>
              <option value="Seattle, WA">Seattle, WA</option>
              <option value="Washington D.C.">Washington D.C.</option>
            </select>
          </div>
          <div className="w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select a price range
            </label>
            <select
              id="price"
              className="text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-black block p-2.5"
              onChange={handlePriceChange}
            >
              <option value="">any price range</option>
              <option value="1, 50">$1 to $50</option>
              <option value="51, 100">$51 to $100</option>
              <option value="101, 999999">$101 and up</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center w-1/4">
          <button
            className="mt-8 bg-green-400 text-lg text-white rounded-lg py-3 px-20 hover:bg-green-500"
            onClick={handleProposeClick}
          >
            Propose Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default FreelancerSearchBar;
