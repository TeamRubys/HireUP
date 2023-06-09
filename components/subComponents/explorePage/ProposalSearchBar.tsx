function ProposalSearchBar({setRole, setLocation, setPriceRange, defaultrole, defaultlocation}) {
    const handleRoleChange = (e) => {
      setRole(e.target.value)
    }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div>
      <div
        id="list-header"
        className="text-4xl font-bold mx-auto mb-8 max-w-screen-2xl"
      >
        Job Proposals
      </div>
      <div
        id="search-bar"
        className="mx-auto items-center justify-start text-left flex flex-row font-bold text-2xl mb-5"
      >
        <div className="mr-5">Show me</div>
        <select id="roles" className="w-1/8 text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-black block p-2.5" value={defaultrole || ''}
        onChange={handleRoleChange}>
          <option value="">all</option>
          <option value="Back End Engineer">Back End Engineer</option>
          <option value="Front End Engineer">Front End Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="UI Designer">UI Designer</option>
          <option value="Web Designer">Web Designer</option>
        </select>
        <div className="mr-5">roles, hiring in</div>
        <select id="location" className="w-1/8 text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-black block p-2.5" value={defaultlocation || ''}
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
        <div className="mr-5"> at </div>
        <select
          id="price"
          className="w-1/8 text-center mr-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-black block p-2.5"
          onChange={handlePriceChange}
        >
          <option value="">any price</option>
          <option value="1, 1000">$1 to $1000</option>
          <option value="1001, 5000">$1001 to $5000</option>
          <option value="5001, 999999">$5001 and up</option>
        </select>
        <div className="mr-5"> range </div>
      </div>
      </div>
    );
  }

  export default ProposalSearchBar;
