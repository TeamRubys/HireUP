import Link from 'next/link';
import { useState, useEffect } from 'react';
import LandingPage from '../components/landingPage';
import ExplorePage from '../components/explorePage';
import ProfileCreation from '../components/profileCreation';
import ProfileView from '../components/profileView';
import BusinessProposal from '../components/businessProposal';
import Chat from '../components/chat'
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import NewChat from '../components/newChat';

const IndexPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hidden, setHidden] = useState(false);

  const { user, isLoading } = useUser();

  console.log('user data from Auth0:', user);

  useEffect(() => {

    if (user) {
      const createUser = async () => {
        try {
          const res = await axios.post('/api/users', {user});
          if (res.status === 200 || res.status === 201) {
            console.log('user created or already exists, res.data:', res.data)
          } else {
            console.log('error with adding user', res.data)
          }
        } catch (err) {
          console.log('error creating user', err)
        }
      };
      createUser();
    }
  }, [user]);


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
        <LandingPage setCurrentPage={setCurrentPage}/>
      ): currentPage===2 ? (
        <ExplorePage />
      ) : currentPage===3 ? (
        <ProfileCreation setCurrentPage={setCurrentPage}/>
      ) : currentPage===4 ? (
        <ProfileView setCurrentPage={setCurrentPage}/>
      ) : currentPage===5 ? (
        <BusinessProposal setCurrentPage={setCurrentPage}/>
      ) : currentPage===6 ? (
        <Chat sendTo={20} setState={undefined}/>
      ) : (<p></p>)}

    </>
  );
};

export default IndexPage;