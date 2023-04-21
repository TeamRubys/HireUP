import Link from 'next/link';
import { useState } from 'react';
import LandingPage from '../components/landingPage';
import ExplorePage from '../components/explorePage';
import ProfileCreation from '../components/profileCreation';
import ProfileView from '../components/profileView';
import BusinessProposal from '../components/businessProposal';
import Chat from '../components/chat'

const IndexPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hidden, setHidden] = useState(false);

  return (
    <>
    {!hidden ? (
            <div className="h-screen w-full left-0 bottom-0 flex justify-evenly items-center">
            <button onClick={() => {setCurrentPage(1); setHidden(true)}}>LandingPage</button>
            <button onClick={() => {setCurrentPage(2); setHidden(true)}}>ExplorePage</button>
            <button onClick={() => {setCurrentPage(3); setHidden(true)}}>ProfileCreation</button>
            <button onClick={() => {setCurrentPage(4); setHidden(true)}}>ProfileView</button>
            <button onClick={() => {setCurrentPage(5); setHidden(true)}}>BusinessProposal</button>
            <button onClick={() => {setCurrentPage(6); setHidden(true)}}>Chat</button>
            <Link href="/login">
              Login
            </Link>
            <Link href="/register">
              Register
            </Link>
          </div>
    ) : (<p></p>)}


      {currentPage===1 ? (
        <LandingPage />
      ): currentPage===2 ? (
        <ExplorePage />
      ) : currentPage===3 ? (
        <ProfileCreation />
      ) : currentPage===4 ? (
        <ProfileView />
      ) : currentPage===5 ? (
        <BusinessProposal />
      ) : currentPage===6 ? (
        <Chat />
      ) : (<p></p>)}

    </>
  );
};

export default IndexPage;