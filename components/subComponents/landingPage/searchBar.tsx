import Head from 'next/head';
import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react';
import Link from 'next/link';

interface SearchBarProp {
  handleSearchSubmit: FormEventHandler<HTMLFormElement>
  search : string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({handleSearchSubmit, search, handleSearchChange}:SearchBarProp) => {
  return (
<div className="mt-4 flex justify-center">
  <form onSubmit={handleSearchSubmit}  style={{width:'100%'}}>
    <div className="flex items-center" style={{width:'100%'}}>
      <label htmlFor="search1" className="sr-only">
        Job/Position
      </label>
      <input
        id="Job/Position"
        type="text"
        placeholder="Job/Position"
        className="rounded-l-md py-2 px-4 border border-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={search}
        onChange={handleSearchChange}
        style={{width:'40%'}}
      />
      <label htmlFor="search2" className="sr-only">
        Location
      </label>
      <input
        id="Location"
        type="text"
        placeholder="Location"
        className="rounded-r-md py-2 px-4 border border-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        style={{width:'40%'}}
      />
  <button
    type="submit"
    className="bg-green-300 hover:bg-green-500 text-white rounded-r-md py-2 px-4 shadow-lg"
    style={{ width: '20%' }}
  >
    Search
  </button>
    </div>
  </form>
</div>

  );
}

export default SearchBar;