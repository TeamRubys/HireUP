function ProposalSideBar({}) {
    return (
      <div>
        <div id="saved" className="flex flex-col mb-4">
          <div className="rounded-lg border border-grey-300 p-4">
            <div className="text-2xl font-bold mb-4">Saved Proposals:</div>
              <ul>Proposal idea 1</ul>
              <ul>Proposal idea 2</ul>
          </div>
        </div>
  
        <div id="applied" className="flex flex-col mb-4">
          <div className="rounded-lg border border-grey-300 p-4">
            <div className="text-2xl font-bold mb-4">Applied Proposals:</div>
              <ul>Proposal idea 3</ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProposalSideBar;
  