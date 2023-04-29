import React, { useState } from "react";
import Chat from "./Chat";
import NewChat from "../../newChat";

function FreelancerCard({ setCurrentPage, setSavedFreelancers, isLoggedIn, freelancer ,setUserId}) {
  const [saved, setSaved] = useState(false);
  const [chat, setChat] = useState(false);

  const handleSaveFreelancerClick = () => {
    if (!isLoggedIn) {
      alert('Please login or sign up to use website features');
      return;
    }
    if (saved) {
      setSaved(false);
      setSavedFreelancers(prevState =>
        prevState.filter(name => name !== freelancer.freelancer_name)
      );
    } else {
      setSaved(true);
      setSavedFreelancers(prevState => [...prevState, freelancer.freelancer_name]);
    }
  };

  const handleChatMessage = () => {
    if(isLoggedIn){
      setChat(true);
    } else {
      alert('Please login or sign up to use website features')
    }
  };

  const handleProfileView = () => {
    if(isLoggedIn){
      setCurrentPage(4);
      setUserId(freelancer.user_id)
    } else {
      alert('Please login or sign up to use website features')
    }
  };

console.log(freelancer)
 return (
    <div className="border p-6 rounded-lg mb-10">
      {chat ? (
        <div className="absolute h-screen w-screen left-0 top-0 border-8">
        <NewChat sendTo={{id: freelancer.user_id}} setState={setChat} setCurrentPage={setCurrentPage}/>
        </div>
      ) : (
        <></>
      )}
      <div id="card-header" className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <img
            id="profile-pic"
            src="https://via.placeholder.com/50"
            className="rounded-full mr-4"
          ></img>
          <div id="freelancer-name" className="flex flex-col">
            <h2 className="text-2xl font-bold">{freelancer.freelancer_name}</h2>
            <ul className="">{freelancer.role}</ul>
            <ul className="">{freelancer.location}</ul>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="mb-9 mr-2 hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-grey-300"
            onClick={handleProfileView}
          >
            See profile
          </button>
          <button
            className="mb-9 mr-2  hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-grey-300"
            onClick={handleSaveFreelancerClick}
          >
            {saved ? "Saved" : "Save"}
          </button>
          <button
            className="mb-9 hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-grey-300"
            onClick={handleChatMessage}
          >
            Message
          </button>
        </div>
      </div>
      <ul>
        <li className="mb-2"><span className="font-bold">Education: </span>{freelancer.education}</li>
        <li className="mb-2"><span className="font-bold">Skills: </span>{freelancer.skills.join(", ")}</li>
        <li className="mb-2"><span className="font-bold">Skills: </span>{freelancer.portfolio.join(", ")}</li>
        <li className="mb-2"><span className="font-bold">Rate: </span>${freelancer.rate}/hr</li>
      </ul>
    </div>
  );
}

export default FreelancerCard;