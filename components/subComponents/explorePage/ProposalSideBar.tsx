function SideBar({}) {
    return (
      <div>
        <div id="saved" className="flex flex-col mb-4">
          <div className="rounded-lg border border-grey-300 p-4">
            <div className="text-2xl font-bold mb-4">Saved Proposals:</div>
            <ul className="">
              <li>Making a website for ecommerce</li>
              <li>Making a mobile phone game</li>
            </ul>
          </div>
        </div>
  
        <div id="applied" className="flex flex-col mb-4">
          <div className="rounded-lg border border-grey-300 p-4">
            <div className="text-2xl font-bold mb-4">Applied Proposals:</div>
            <ul className="">
              <li>Making a mario game dupe</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default SideBar;
  