function ProposalSideBar({ savedJobs, appliedJobs, setCurrentPage }) {
  return (
    <div>
      <div id="saved" className="flex flex-col mb-4">
        <div className="rounded-lg border border-grey-300 p-4">
          <div className="text-2xl font-bold mb-4">Saved Jobs:</div>
          {savedJobs.length === 0 ? (
            <div className="italic">No saved jobs</div>
          ) : (
            savedJobs.map((job, index) => (
              <ul key={index}>
                <span
                  className="hover:text-green-500 hover:underline cursor-pointer"
                  onClick={() => setCurrentPage(4)}
                >
                  {job}
                </span>
              </ul>
            ))
          )}
        </div>
      </div>

      <div id="applied" className="flex flex-col mb-4">
        <div className="rounded-lg border border-grey-300 p-4">
          <div className="text-2xl font-bold mb-4">Applied Jobs:</div>
          {appliedJobs.length === 0 ? (
            <div className="italic">No applied jobs</div>
          ) : (
            appliedJobs.map((job, index) => (
              <ul key={index}>
                <span
                  className="hover:text-green-500 hover:underline cursor-pointer"
                  onClick={() => setCurrentPage(4)}
                >
                  {job}
                </span>
              </ul>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProposalSideBar;
