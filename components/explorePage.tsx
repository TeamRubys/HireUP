import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './subComponents/explorePage/Header';
import ProposalBody from './subComponents/explorePage/ProposalBody';
import FreelancerBody from './subComponents/explorePage/FreelancerBody';
import Footer from './subComponents/explorePage/Footer';
import Chat from './subComponents/explorePage/Chat';
import axios from 'axios';

interface Props {
  setCurrentPage: (currentPage: number) => void;
  user: any;
}

const ExplorePage: React.FC<Props> = ({ setCurrentPage, user }) => {
  const [page, setPage] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Array<any>>([]);
  const [freelancers, setFreelancers] = useState<Array<any>>([]);
  const [userInfo, setUserInfo] = useState<any>(user);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      setUserInfo(userInfo);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    axios
      .get('/api/proposals')
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('/api/freelancers')
      .then((res) => {
        setFreelancers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Header
        userInfo={userInfo}
        page={page}
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentPage={setCurrentPage}
      />
      {page === 0 && (
        <ProposalBody
          setCurrentPage={setCurrentPage}
          isLoggedIn={isLoggedIn}
          jobs={jobs}
        />
      )}
      {page === 1 && (
        <FreelancerBody
          setCurrentPage={setCurrentPage}
          isLoggedIn={isLoggedIn}
          freelancers={freelancers}
        />
      )}
      <Footer setCurrentPage={setCurrentPage} />
      <Chat setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} />
    </>
  );
};

export default ExplorePage;