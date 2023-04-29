import Head from 'next/head';
import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react';
import Link from 'next/link';

interface SearchBarProp {
  handleSearchSubmit: FormEventHandler<HTMLFormElement>
  setTemprole: Dispatch<any>;
  setTemplocation: Dispatch<any>;
}

const SearchBar = ({handleSearchSubmit, setTemprole, setTemplocation}:SearchBarProp) => {

  return (
<div className="mt-4 flex justify-center">
  <form onSubmit={handleSearchSubmit}  style={{width:'100%'}}>
    <div className="flex items-center" style={{width:'100%'}}>
      <label htmlFor="search1" className="sr-only">
        Job/Position
      </label>
      {/* <input
        id="Job/Position"
        type="text"
        placeholder="Job/Position"
        className="rounded-l-md py-2 px-4 border border-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={search}
        onChange={handleSearchChange}
        style={{width:'40%'}}
      /> */}
              <select id="roles" className="rounded-l-md py-2 px-4 border border-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" style={{width:'40%'}}
        onChange={(e)=>{setTemprole(e.target.value)}}>
          <option value="">all</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Web Designer">Web Designer</option>
        </select>
      <label htmlFor="search2" className="sr-only">
        Location
      </label>
      {/* <input
        id="Location"
        type="text"
        placeholder="Location"
        className="rounded-r-md py-2 px-4 border border-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        style={{width:'40%'}}
      /> */}
              <select id="location" className="rounded-r-md py-2 px-4 border border-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              style={{width:'40%'}}
        onChange={(e)=>{setTemplocation(e.target.value)}}
        >
          <option value="">any location</option>
          <option value="Remote">Remote</option>
          <option value="San Francisco, CA">San Francisco, CA</option>
          <option value="New York, NY">New York, NY</option>
        </select>
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