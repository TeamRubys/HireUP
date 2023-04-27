import React, { useState, useEffect } from "react";
import ProposalSearchBar from "./ProposalSearchBar";
import ProposalCardList from "./ProposalCardList";
import ProposalSideBar from "./ProposalSideBar";

interface Props {
  setCurrentPage: Function;
  jobs: Array<any>;
  isLoggedIn: boolean;
}

function ProposalBody({ setCurrentPage, jobs, isLoggedIn }: Props) {
  const [role, setRole] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  const [filteredJobs, setFilteredJobs] = useState<Array<any>>([]);
  const [savedJobs, setSavedJobs] = useState<Array<any>>([]);
  const [appliedJobs, setAppliedJobs] = useState<Array<any>>([]);

  useEffect(() => {
    let filtered = jobs;
    if (role) {
      filtered = filtered.filter((job) => job.roles.includes(role));
    }
    if (location) {
      filtered = filtered.filter((job) => job.locations.includes(location));
    }
    if (priceRange) {
      const [min, max] = priceRange.split(",");
      filtered = filtered.filter((job) => {
        const budget = Number(job.budget);
        return budget >= Number(min) && budget <= Number(max);
      });
    }
    setFilteredJobs(filtered);
  }, [jobs, role, location, priceRange]);

  return (
    <div className="w-full mb-20 mx-auto mb-8 max-w-screen-xl mt-10">
      <ProposalSearchBar
        setRole={setRole}
        setLocation={setLocation}
        setPriceRange={setPriceRange}
      />
      <div className="flex">
        <div className="w-3/4 mt-3">
          <ProposalCardList
            setSavedJobs={setSavedJobs}
            setAppliedJobs={setAppliedJobs}
            setCurrentPage={setCurrentPage}
            filteredJobs={filteredJobs}
            isLoggedIn={isLoggedIn}
          />
        </div>
        <div className="w-1/4 p-3">
          <ProposalSideBar
            savedJobs={savedJobs}
            appliedJobs={appliedJobs}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default ProposalBody;
