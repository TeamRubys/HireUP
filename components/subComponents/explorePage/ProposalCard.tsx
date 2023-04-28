import React, { useState } from "react";
import NewChat from "../../newChat";

function ProposalCard({setCurrentPage, setSavedJobs, setAppliedJobs, isLoggedIn, job}) {
  const [saved, setSaved] = useState<boolean>(false);
  const [applied, setApplied] = useState<boolean>(false);
  const [chat, setChat] = useState(false)
  console.log(job)

  const handleSaveJobClick = () => {
    if (isLoggedIn) {
      if (saved) {
        setSaved(false);
        setSavedJobs((prevJobs) =>
          prevJobs.filter((headline) => headline !== job.headline)
        );
      } else {
        setSaved(true);
        setSavedJobs((prevJobs) => [...prevJobs, job.headline]);
      }
    } else {
      alert("Please login or sign up to use website features");
    }
  };

  const handleApplyClick = () => {
    if (isLoggedIn) {
      if (applied) {
        setApplied(false);
        setAppliedJobs((prevJobs) =>
          prevJobs.filter((headline) => headline !== job.headline)
        );
      } else {
        setApplied(true);
        setAppliedJobs((prevJobs) => [...prevJobs, job.headline]);
      }
    } else {
      alert("Please login or sign up to use website features");
    }
  };

  const handleChatMessageClick = () => {
    if (isLoggedIn) {
      setChat(true);
    } else {
      alert("Please login or sign up to use website features");
    }
  };

  const handleProfileViewClick = () => {
    if (isLoggedIn) {
      setCurrentPage(4);
    } else {
      alert("Please login or sign up to use website features");
    }
  };

  return (
    <div className="border p-6 rounded-lg mb-10">
      <div id="card-header" className="flex justify-between items-center mb-5">
      {chat ? (
        <NewChat sendTo={job} setState={setChat}/>
      ):(<></>)}
        <div className="flex flex-col">
          <h2 id="headline" className="text-2xl font-bold">
            {job.headline}
          </h2>
          <ul className="">{job.poster_name}</ul>
          <ul className="text-gray-400">
            {new Date(job.timestamp).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </ul>
        </div>
        <div>
          <button
            className="mb-9 mr-2 hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-grey-300"
            onClick={handleProfileViewClick}
          >
            See profile
          </button>
          <button
            className="mb-9 mr-2 hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-grey-300"
            onClick={handleSaveJobClick}
          >
            {saved ? "Saved" : "Save"}
          </button>
          <button
            className="hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-grey-300"
            onClick={handleChatMessageClick}
          >
            Message
          </button>
        </div>
      </div>
      <ul>
        <li className="mb-2">
          <span className="font-bold">Overview: </span>
          {job.overview}
        </li>
        <li className="mb-2 ">
          <span className="font-bold">Skills required: </span>
          {job.skills}
        </li>
      </ul>
      <div className="flex justify-between items-center border p-2 rounded-lg">
        <div>
          <span className="font-bold mr-2 ml-2">
            {job.roles.map((role, index) => (
              <span key={index}>
                {role}
                {index !== job.roles.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
              {'• '}
          <span className="mr-2">
            {job.locations.map((location, index) => (
              <span key={index}>
                {location}
                {index !== job.locations.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
          {'• '}
          <span>${job.budget}</span>
        </div>
        <button
          className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded border"
          onClick={handleApplyClick}
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default ProposalCard;
