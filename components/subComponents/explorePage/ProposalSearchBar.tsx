function ProposalSearchBar({setRole, setLocation, setPriceRange}) {
    const handleRoleChange = (e) => {
      setRole(e.target.value)
    }

    const handleLocationChange = (e) => {
      setLocation(e.target.value)
    }
    const handlePriceChange = (e) => {
      setPriceRange(e.target.value)
    }

    return (
    <div>
        <div id="list-header" className="text-4xl font-bold mx-auto mb-8 max-w-screen-2xl">Job Proposals</div>
      <div id="search-bar" className="mx-auto items-center justify-start text-left flex flex-row font-bold text-2xl mb-5">
        <div className="mr-5">Show me</div>
        <select id="roles" className="w-1/8 text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={handleRoleChange}>
          <option value="">all</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Web Designer">Web Designer</option>
        </select>
        <div className="mr-5">roles, hiring in</div>
        <select id="location" className="w-1/8 text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleLocationChange}
        >
          <option value="">any location</option>
          <option value="Remote">Remote</option>
          <option value="San Francisco, CA">San Francisco, CA</option>
          <option value="New York, NY">New York, NY</option>
        </select>
        <div className="mr-5"> at </div>
        <select id="price" className="w-1/8 text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handlePriceChange}
        >
          <option value="">any price</option>
          <option value="$1 to $1000">$1 to $1000</option>
          <option value="$1000 to $5000">$1000 to $5000</option>
          <option value="$1000 to $5000">$1000 to $5000</option>
        </select>
        <div className="mr-5"> range </div>
      </div>
      </div>
    );
  }
  
  export default ProposalSearchBar;
