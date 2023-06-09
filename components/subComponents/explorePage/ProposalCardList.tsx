import React, { useState } from "react";
import ProposalCard from "./ProposalCard";

interface Props {
  setCurrentPage: Function
  filteredJobs: Array<any>
  isLoggedIn: boolean
  setSavedJobs: Array<any>
  setAppliedJobs: Array<any>
}

function ProposalCardList({setCurrentPage, filteredJobs, isLoggedIn, setSavedJobs, setAppliedJobs, setUserId}) {
  const [numToShow, setNumToShow] = useState(4);

  const handleLoadMore = () => {
    setNumToShow(numToShow + 4);
  };

  return (
    <div className="mb-20">
      {filteredJobs.length > 0 ? (
        filteredJobs
          .slice(0, numToShow)
          .map((job, index) => (
            <ProposalCard
              key={index}
              job={job}
              setSavedJobs={setSavedJobs}
              setAppliedJobs={setAppliedJobs}
              setCurrentPage={setCurrentPage}
              isLoggedIn={isLoggedIn}
              setUserId={setUserId}
            />
          ))
      ) : (
        <div className="text-center italic mb-4">No jobs found.</div>
      )}
      {filteredJobs.length > numToShow && (
        <div className="flex justify-center mt-10">
          <button
            className="border bg-grey-100 hover:bg-gray-300 font-bold py-3 px-10 rounded"
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