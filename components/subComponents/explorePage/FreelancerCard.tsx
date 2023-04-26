function FreelancerCard({}) {
    return (
      <div className="border p-6 rounded-lg mb-10">
        <div
          id="card-header"
          className="flex justify-between items-center mb-5"
        >
          <div className="flex items-center">
            <img
              id="profile-pic"
              src="https://via.placeholder.com/50"
              className="rounded-full mr-4"
            ></img>
            <div id="freelancer-name" className="flex flex-col">
              <h2 className="text-2xl font-bold">Freelancer's Name</h2>
              <ul className="">Job Title</ul>
              <ul className="">Location</ul>
            </div>
          </div>
          <div className="flex items-center justify-between">
          <button className="mb-9 mr-2 bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded border border-black">
            See profile
          </button>
            <button className="mb-9 mr-2 bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded border border-black">
              Save
            </button>
            <button className="mb-9 bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded border border-black">
              Message
            </button>
          </div>
        </div>
        <ul>
          <li className="mb-2 font-bold">Education: </li>
          <li className="mb-2 font-bold">Skills:</li>
          <li className="mb-2 font-bold">Portfolio:</li>
          <li className="mb-2 font-bold">Rate:</li>
        </ul>
      </div>
    );
  }
  
  export default FreelancerCard;
  