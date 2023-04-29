import { Dispatch, SetStateAction, useState } from 'react';
import Header from './header';
import Gallery from './gallery';
import SearchBar from './searchBar';
import Cards from './cards';
import Footer from './footer';
import Head from 'next/head';
import Album from './album';
import { UserIdContext } from '../../UserIdContext';

interface MainPageProp {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setRole: Dispatch<any>;
  setLocation: Dispatch<any>;
}
const MainPage = ({setCurrentPage, setRole, setLocation}:MainPageProp) => {
  const [temprole, setTemprole]=useState(null);
  const [templocation, setTemplocation]=useState(null);

  const handleSearchSubmit = () => {
    setRole(temprole);
    setLocation(templocation);
    setCurrentPage(2);
  };

  const handleProfile = () => {
    setCurrentPage(4);
  };

  return (
    <div className="flex flex-col min-h-screen">
    <Head>
      <title>Hire Up</title>
    </Head>
    <div style={{ marginBottom: '1%' }}>
      <Header handleProfile={handleProfile} />
    </div>
      <main className="flex-1" style={{marginBottom:'5%'}}>
        <div className="flex items-center justify-center">
          <div style={{width:'80%'}}>
            <Gallery />
            <SearchBar handleSearchSubmit={handleSearchSubmit} setTemprole={setTemprole} setTemplocation={setTemplocation}/>
          </div>
        </div>
        <Cards/>
        <Album/>
      </main>
      <Footer/>
    </div>
  );
}

export default MainPage;
