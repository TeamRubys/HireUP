import React, { useState } from 'react';
import Link from 'next/link';
import Header from './subComponents/explorePage/Header';
import ProposalBody from './subComponents/explorePage/ProposalBody';
import FreelancerBody from './subComponents/explorePage/FreelancerBody'
import Footer from './subComponents/explorePage/Footer';
import Chat from'./subComponents/explorePage/Chat'

function ExplorePage() {
  const [page, setPage] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] =useState<boolean>(false)

  return (
    <>
      <Header page={page} setPage={setPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {page === 0 && <ProposalBody />}
      {page === 1 && <FreelancerBody />}
      <Footer />
      <Chat/>
    </>
  );
}

export default ExplorePage;
