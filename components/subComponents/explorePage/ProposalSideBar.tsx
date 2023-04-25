function ProposalSideBar({ savedJobs, appliedJobs }) {
  return (
    <div>
      <div id="saved" className="flex flex-col mb-4">
        <div className="rounded-lg border border-grey-300 p-4">
          <div className="text-2xl font-bold mb-4">Saved Jobs:</div>
          {savedJobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </div>
      </div>

      <div id="applied" className="flex flex-col mb-4">
        <div className="rounded-lg border border-grey-300 p-4">
          <div className="text-2xl font-bold mb-4">Applied Jobs:</div>
          {appliedJobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProposalSideBar;
