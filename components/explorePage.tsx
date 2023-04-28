import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './subComponents/explorePage/Header';
import ProposalBody from './subComponents/explorePage/ProposalBody';
import FreelancerBody from './subComponents/explorePage/FreelancerBody';
import Footer from './subComponents/explorePage/Footer';
import Chat from './subComponents/explorePage/Chat';
import axios from 'axios';
import ChatBox from './chat'
import { set } from 'react-hook-form';

interface Props {
  setCurrentPage: (currentPage: number) => void;
  user: any;
  role: any;
  location: any;
}

const ExplorePage: React.FC<Props> = ({ setCurrentPage, user, role, location }) => {
  const [page, setPage] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Array<any>>([]);
  const [freelancers, setFreelancers] = useState<Array<any>>([]);
  const [userInfo, setUserInfo] = useState<any>(user);
  const [chat, setChat] = useState(false)

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
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
    <div>
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
          defaultrole={role}
          defaultlocation={location}
        />
      )}
      {page === 1 && (
        <FreelancerBody
          setChat={setChat}
          setCurrentPage={setCurrentPage}
          isLoggedIn={isLoggedIn}
          freelancers={freelancers}
        />
      )}
      <Footer/>
      <Chat setCurrentPage={() => {setChat(true)}} isLoggedIn={isLoggedIn} />
      {chat ? (
      <div className="absolute h-screen w-screen top-0">
        <ChatBox sendTo={0} setState={setChat}/>
      </div>
      ) : (<></>)}
    </div>
  );
};

export default ExplorePage;