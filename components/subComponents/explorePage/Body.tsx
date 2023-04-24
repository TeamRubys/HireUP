import SearchBar from './SearchBar';
import CardList from './CardList';
import SideBar from './SideBar';

function Body() {
  return (
    <div className="w-full mb-20 mx-auto mb-8 max-w-screen-xl">
      <SearchBar/>
      <div className="flex">
        <div className="w-3/4 mt-6">
          <CardList />
        </div>
        <div className="w-1/4 p-6">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Body;
