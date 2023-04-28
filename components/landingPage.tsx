import React, { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import MainPage from './subComponents/landingPage/mainPage';
interface LandingPageProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setRole: Dispatch<any>;
  setLocation: Dispatch<any>;
}
function LandingPage({setCurrentPage, setRole, setLocation}:LandingPageProps) {
  return (
    <>
      <MainPage setCurrentPage={setCurrentPage} setRole={setRole} setLocation={setLocation}/>
    </>

  );
}

export default LandingPage;