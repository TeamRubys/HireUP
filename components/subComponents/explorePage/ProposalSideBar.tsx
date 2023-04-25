function ProposalSideBar({}) {
    return (
      <div>
        <div id="saved" className="flex flex-col mb-4">
          <div className="rounded-lg border border-grey-300 p-4">
            <div className="text-2xl font-bold mb-4">Saved Jobs:</div>
          </div>
        </div>
  
        <div id="applied" className="flex flex-col mb-4">
          <div className="rounded-lg border border-grey-300 p-4">
            <div className="text-2xl font-bold mb-4">Applied Jobs:</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProposalSideBar;
  