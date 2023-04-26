// import ProposalCard from "./ProposalCard"

// function ProposalCardList({setCurrentPage, filteredJobs, setSavedJobs, setAppliedJobs}) {

//   return (
//     <div className="mb-20">
//       <ProposalCard setCurrentPage={setCurrentPage} setSavedJobs={setSavedJobs} setAppliedJobs={setAppliedJobs}/>
//       <div className="flex justify-center mt-10">
//         <button className="bg-black hover:bg-blue-700 text-white font-bold py-3 px-10 rounded">
//           Load More
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProposalCardList;
//***********************************************************************************************

import React, {useState} from 'react'
import ProposalCard from "./ProposalCard"

function ProposalCardList({setCurrentPage, filteredJobs, setSavedJobs, setAppliedJobs}) {

  const [numToShow, setNumToShow] = useState(4);

  const handleLoadMore = () => {
    setNumToShow(numToShow + 4);
  };

  return (
    <div className="mb-20">
      {filteredJobs.slice(0, numToShow).map(job => (
        <ProposalCard setCurrentPage={setCurrentPage} setSavedJobs={setSavedJobs} setAppliedJobs={setAppliedJobs}/>
      ))}
      {filteredJobs.length > numToShow && (
        <div className="flex justify-center mt-10">
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-3 px-10 rounded"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProposalCardList;