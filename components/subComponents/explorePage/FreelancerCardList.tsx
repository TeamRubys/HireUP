import React, { useState } from "react";
import FreelancerCard from "./FreelancerCard";

function FreelancerCardList({setCurrentPage, setSavedFreelancers, filteredFreelancers, isLoggedIn}) {
  const [numToShow, setNumToShow] = useState(4);

  const handleLoadMore = () => {
    setNumToShow(numToShow + 4);
  };

  return (
    <div className="mb-20">
      {filteredFreelancers.length > 0 ? (
        filteredFreelancers.slice(0, numToShow).map((freelancer) => (
          <FreelancerCard setCurrentPage={setCurrentPage} setSavedFreelancers={setSavedFreelancers} isLoggedIn={isLoggedIn}/>
        ))
      ) : (
        <div className="text-center italic mb-4">No freelancers found.</div>
      )}
      {filteredFreelancers.length > numToShow && (
        <div className="flex justify-center mt-10">
          <button
            className="bg-black hover:bg-blue-700 text-white font-bold py-3 px-10 rounded"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default FreelancerCardList;
