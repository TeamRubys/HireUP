import { useState } from 'react';
import Header from './header';
import Gallery from './gallery';
import SearchBar from './searchBar';
import Cards from './cards';
import Footer from './footer';
import Head from 'next/head';

const MainPage = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log(search);
  };

  return (
    <div className="flex flex-col min-h-screen">
    <Head>
      <title>Hire Up</title>
    </Head>
    <div style={{ marginBottom: '1%' }}>
      <Header />
    </div>
      <main className="flex-1">
        <div className="flex items-center justify-center">
          <div style={{width:'80%'}}>
            <Gallery />
            <SearchBar handleSearchChange={handleSearchChange} search={search} handleSearchSubmit={handleSearchSubmit}/>
          </div>
        </div>
        <Cards />
      </main>
      <Footer/>
    </div>
  );
}

export default MainPage;
