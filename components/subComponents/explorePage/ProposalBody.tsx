import React, {useState} from 'react'
import ProposalSearchBar from './ProposalSearchBar';
import ProposalCardList from './ProposalCardList';
import ProposalSideBar from './ProposalSideBar';

function ProposalBody({setCurrentPage}) {
  const [role, setRole] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [priceRange, setPriceRange] = useState<string>('')
  const [filteredJobs, setFilteredJobs] = useState<Array<any>>([])

  //filter job function here

  return (
    <div className="w-full mb-20 mx-auto mb-8 max-w-screen-xl">
      <ProposalSearchBar setRole={setRole} setLocation={setLocation} setPriceRange={setPriceRange}/>
      <div className="flex">
        <div className="w-3/4 mt-3">
          <ProposalCardList setCurrentPage={setCurrentPage}/>
        </div>
        <div className="w-1/4 p-3">
          <ProposalSideBar />
        </div>
      </div>
    </div>
  );
}

export default ProposalBody;
