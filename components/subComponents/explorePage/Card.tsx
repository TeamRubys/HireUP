function Card({}) {
    return (
      <div className="border p-6 rounded-lg">
        <div id="card-header" className="flex justify-between items-center mb-10">
            <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Example Title</h2>
            <ul>{/*client*/}</ul>
            <ul>{/*timestamp*/}</ul>
            </div>
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
        <ul>
            <li className="mb-2 font-bold" >Overview: </li>{}
            <li className="mb-2 font-bold" >Skills required:</li>{}
        </ul>
        <div>Role: {} | Location: {} | Pay: {} </div>
      </div>
    );
  }
  
  export default Card;
  