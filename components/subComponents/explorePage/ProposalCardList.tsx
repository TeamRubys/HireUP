import ProposalCard from "./ProposalCard"

function ProposalCardList({setCurrentPage, filteredJobs, savedJobs, setSavedJobs, setAppliedJobs}) {

  return (
    <div className="mb-20">
      <ProposalCard setCurrentPage={setCurrentPage} setSavedJobs={setSavedJobs} setAppliedJobs={setAppliedJobs}/>
      <div className="flex justify-center mt-10">
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-3 px-10 rounded">
          Load More
        </button>
      </div>
    </div>
  );
}

export default ProposalCardList;

//***********************************************************************************************
// import ProposalCard from "./ProposalCard"

// function ProposalCardList({setCurrentPage, filteredJobs}) {

//   return (
//     <div className="mb-20">
//       {filteredJobs.map(job => (
//         <ProposalCard setCurrentPage={setCurrentPage}/>
//       ))}
//       <div className="flex justify-center mt-10">
//         <button className="bg-black hover:bg-blue-700 text-white font-bold py-3 px-10 rounded">
//           Load More
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProposalCardList;
