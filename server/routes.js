const controller = require('./controllers');
const { v4: uuidv4 } = require("uuid");
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const twilioClient = require("twilio")(
  process.env.TWILIO_API_KEY_SID,
  process.env.TWILIO_API_KEY_SECRET,
  { accountSid: process.env.TWILIO_ACCOUNT_SID }
);
const router = require('express').Router();

const findOrCreateRoom = async (roomName) => {
  try {
    // see if the room exists already. If it doesn't, this will throw
    // error 20404.
    await twilioClient.video.rooms(roomName).fetch();
  } catch (error) {
    // the room was not found, so create it
    if (error.code == 20404) {
      await twilioClient.video.rooms.create({
        uniqueName: roomName,
        type: "go",
      });
    } else {
      // let other errors bubble up
      throw error;
    }
  }
};

const getAccessToken = (roomName) => {
  // create an access token
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY_SID,
    process.env.TWILIO_API_KEY_SECRET,
    // generate a random unique identity for this participant
    { identity: uuidv4() }
  );
  // create a video grant for this specific room
  const videoGrant = new VideoGrant({
    room: roomName,
  });

  // add the video grant
  token.addGrant(videoGrant);
  // serialize the token and return it
  return token.toJwt();
};

// router.get('/', (req, res) => {
//   console.log('test');
//   res.end('test');
// });

// Messages
router.get('/api/messages', controller.messages.get);
router.get('/api/messages/:id', controller.messages.getOne);
router.post('/api/messages', controller.messages.createMessage);

// Proposals
router.get('/api/proposals', controller.proposals.get);
router.get('/api/proposals/:id', controller.proposals.getOne);
router.post('/api/proposals', controller.proposals.createProposal);

// Freelancers
router.get('/api/freelancers', controller.freelancers.get);
router.get('/api/freelancers/:id', controller.freelancers.getOne);
router.post('/api/freelancers', controller.freelancers.createFreelancer);

//Users
router.post('/api/users', async (req, res) => {
  //do I need middleware somewhere
  const { id, name, email } = req.body;

  console.log('in users post route, user data:', req.body)

  try {
    await controller.users.createUser(id, name, email);
    res.send('user created');
  } catch (error) {
    console.log(error);
    res.status(500).send('attempt to add user unsuccessful. :(')
  }
});

router.post("/join-room", async (req, res) => {
  // return 400 if the request has an empty body or no roomName
  if (!req.body || !req.body.roomName) {
    return res.status(400).send("Must include roomName argument.");
  }
  const roomName = req.body.roomName;
  // find or create a room with the given roomName
  findOrCreateRoom(roomName);
  // generate an Access Token for a participant in this room
  const token = getAccessToken(roomName);
  res.send({
    token: token,
  });
});


router.post('/api/users', controller.users.createUser);
router.get('/api/users', controller.users.get);
router.get('/api/users/:id', controller.users.getOne);

module.exports = router;