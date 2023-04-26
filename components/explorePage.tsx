import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './subComponents/explorePage/Header';
import ProposalBody from './subComponents/explorePage/ProposalBody';
import FreelancerBody from './subComponents/explorePage/FreelancerBody'
import Footer from './subComponents/explorePage/Footer';
import Chat from'./subComponents/explorePage/Chat'

function ExplorePage({setCurrentPage}) {
  const [page, setPage] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] =useState<boolean>(true)
  const [userId, setUserId] = useState<string>('')
  const [jobs, setJobs] = useState<Array<any>>([])
  const [freelancers, setFreelancers] = useState<Array<any>>([])

  //useEffect(() => {
  // grab userId and session and verify if user is logged in
  // set states if logged in
  // grab all jobs and freelancers from
  // })

  return (
    <>
      <Header page={page} setPage={setPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage}/>
      {page === 0 && <ProposalBody setCurrentPage={setCurrentPage} jobs={jobs}/>}
      {page === 1 && <FreelancerBody setCurrentPage={setCurrentPage} freelancers={freelancers}/>}
      <Footer />
      <Chat setCurrentPage={setCurrentPage}/>
    </>
  );
}

export default ExplorePage;
