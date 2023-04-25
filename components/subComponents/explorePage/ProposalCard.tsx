function ProposalCard({}) {
    return (
      <div className="border p-6 rounded-lg mb-10">
        <div id="card-header" className="flex justify-between items-center mb-5">
            <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Example Headline</h2>
            <ul className="">Client</ul>
            <ul className="text-gray-400">Date Posted</ul>
            </div>
        <div>
        <button className="mb-9 mr-2 bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded border border-black">
            See profile
          </button>
          <button className="mb-9 mr-2 bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded border border-black">
            Save
          </button>
          <button className="bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded border border-black">
            Message
          </button>
        </div>
        </div>
        <ul>
            <li className="mb-2 font-bold" >Overview: </li>{}
            <li className="mb-2 font-bold" >Skills required:</li>{}
        </ul>
        <div className="flex justify-between items-center border p-2 rounded-lg">
            <div>
            <span className="font-bold mr-2 ml-2">Role </span>
            <span className="mr-2">Location </span>
            <span>Price</span>
            </div> 
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-black">
            Apply
          </button>
        </div>
      </div>
    );
  }
  
  export default ProposalCard;
  