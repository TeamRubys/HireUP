import React, { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import MainPage from './subComponents/landingPage/mainPage';
interface LandingPageProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
function LandingPage({setCurrentPage}:LandingPageProps) {
  return (
    <>
      <MainPage setCurrentPage={setCurrentPage}/>
    </>

  );
}

export default LandingPage;