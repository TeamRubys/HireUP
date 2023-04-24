import SearchBar from './SearchBar';
// import CardList from './CardList';
// import SavedList from './SavedList';

function Body() {
  return (
    <div className="w-full mb-20">
      <SearchBar/>
      <div className="flex">
        <div className="w-3/4">
          {/* <CardList /> */}
        </div>
        <div className="w-1/4">
          {/* <SavedList /> */}
        </div>
      </div>
    </div>
  );
}

export default Body;
