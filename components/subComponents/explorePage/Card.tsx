function Card({}) {
    return (
      <div className="border p-4 rounded-lg flex justify-between items-center">
        <h2 className="text-2xl font-bold">Example Proposal</h2>
        <div>
          <button className="mr-2 bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded border border-gray-400">
            Save
          </button>
          <button className="mr-2 bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded border border-gray-400">
            Message
          </button>
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-gray-400">
            Apply
          </button>
        </div>
      </div>
    );
  }
  
  export default Card;
  