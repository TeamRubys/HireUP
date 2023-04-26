import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './subComponents/explorePage/Header';
import ProposalBody from './subComponents/explorePage/ProposalBody';
import FreelancerBody from './subComponents/explorePage/FreelancerBody'
import Footer from './subComponents/explorePage/Footer';
import Chat from'./subComponents/explorePage/Chat'
import axios from 'axios'

function ExplorePage({setCurrentPage}) {
  const [page, setPage] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] =useState<boolean>(false)
  const [userId, setUserId] = useState<string>('')
  const [jobs, setJobs] = useState<Array<any>>([])
  const [freelancers, setFreelancers] = useState<Array<any>>([])

  useEffect(() => {
  //user validation
  },[])

  useEffect(() => {
    axios.get('/api/proposals')
    .then((res) => {
      setJobs(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  },[])

  useEffect(() => {
    axios.get('/api/freelancers')
    .then((res) => {
      setFreelancers(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  },[])

  return (
    <>
      <Header page={page} setPage={setPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage}/>
      {page === 0 && <ProposalBody setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} jobs={jobs}/>}
      {page === 1 && <FreelancerBody setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} freelancers={freelancers}/>}
      <Footer />
      <Chat setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn}/>
    </>
  );
}

export default ExplorePage;
