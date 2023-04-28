import { Dispatch, SetStateAction, useState } from 'react';
import Header from './header';
import Gallery from './gallery';
import SearchBar from './searchbar';
import Cards from './cards';
import Footer from './footer';
import Head from 'next/head';
import Album from './album';

interface MainPageProp {
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
const MainPage = ({setCurrentPage}:MainPageProp) => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState('John')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log(search);
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
      <Header user={user} setUser={setUser} handleProfile={handleProfile} />
    </div>
      <main className="flex-1" style={{marginBottom:'5%'}}>
        <div className="flex items-center justify-center">
          <div style={{width:'80%'}}>
            <Gallery />
            <SearchBar handleSearchChange={handleSearchChange} search={search} handleSearchSubmit={handleSearchSubmit}/>
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
