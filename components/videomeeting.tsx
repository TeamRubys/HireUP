import Head from 'next/head';
import React, {useRef, useState} from 'react';
import TwilioVideo from 'twilio-video';

export default function videomeeting() {
  const roomNameInputRef = useRef(null);
  const formRef = useRef(null);
  const containerRef = useRef(null);
  const [roomname, setRoomname] = useState('');
  const startRoom = async (event) => {
    // prevent a page reload when a user submits the form
    event.preventDefault();
    // hide the join form
    formRef.current.style.visibility = "hidden"
    // retrieve the room name
    const roomName = roomname;

    // fetch an Access Token from the join-room route
    const response = await fetch("/join-room", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomName: roomName }),
    });
    const { token } = await response.json();

    // join the video room with the token
    const room = await joinVideoRoom(roomName, token);

    // render the local and remote participants' video and audio tracks
    handleConnectedParticipant(room.localParticipant);
    room.participants.forEach(handleConnectedParticipant);
    room.on("participantConnected", handleConnectedParticipant);
    room.on("participantDisconnected", handleDisconnectedParticipant);
    window.addEventListener("pagehide", () => room.disconnect());
    window.addEventListener("beforeunload", () => room.disconnect());
  };

  const handleConnectedParticipant = (participant) => {
    // create a div for this participant's tracks
    const participantDiv = document.createElement("div");
    participantDiv.setAttribute("id", participant.identity);
    containerRef.current.appendChild(participantDiv);

    // iterate through the participant's published tracks and
    // call `handleTrackPublication` on them
    participant.tracks.forEach((trackPublication) => {
      handleTrackPublication(trackPublication, participant);
    });

    // listen for any new track publications
    participant.on("trackPublished", handleTrackPublication);
  };

  const handleTrackPublication = (trackPublication, participant) => {
    function displayTrack(track) {
      // append this track to the participant's div and render it on the page
      const participantDiv = document.getElementById(participant.identity);
      // track.attach creates an HTMLVideoElement or HTMLAudioElement
      // (depending on the type of track) and adds the video or audio stream
      participantDiv.append(track.attach());
    }

    // check if the trackPublication contains a `track` attribute. If it does,
    // we are subscribed to this track. If not, we are not subscribed.
    if (trackPublication.track) {
      displayTrack(trackPublication.track);
    }

    // listen for any new subscriptions to this track publication
    trackPublication.on("subscribed", displayTrack);
  };

  const joinVideoRoom = async (roomName, token) => {
    // join the video room with the Access Token and the given room name
    const room = await TwilioVideo.connect(token, {
      name: roomName,
    });
    return room;
  };

  const handleDisconnectedParticipant = (participant) => {
    // stop listening for this participant
    participant.removeAllListeners();
    // remove this participant's div from the page
    const participantDiv = document.getElementById(participant.identity);
    participantDiv.remove();
  };

  return (
    <div>
      <Head>
        <title>Twilio Video Demo</title>
        <script src="https://sdk.twilio.com/js/video/releases/2.15.2/twilio-video.min.js"></script>
      </Head>
      <form id="room-name-form" ref={formRef} onSubmit={startRoom}>
  Enter a Room Name to join: <input name="room_name" id="room-name-input" ref={roomNameInputRef} onChange={(e)=>{setRoomname(e.target.value)}} />
  <button type="submit">Join Room</button>
</form>
<div id="video-container" ref={containerRef}></div>
      <script src="/main.js"></script>
    </div>
  );
}
