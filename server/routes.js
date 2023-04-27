const controller = require('./controllers');
const router = require('express').Router();

// router.get('/', (req, res) => {
//   console.log('test');
//   res.end('test');
// });

// Messages
router.get('/messages', controller.messages.get);
router.get('/messages/:id', controller.messages.getOne);
router.post('/messages', controller.messages.createMessage);

// Proposals
router.get('/proposals', controller.proposals.get);
router.get('/proposals/:id', controller.proposals.getOne);
router.post('/proposals', controller.proposals.createProposal);

// Freelancers
router.get('/freelancers', controller.freelancers.get);
router.get('/freelancers/:id', controller.freelancers.getOne);
router.post('/freelancers', controller.freelancers.createFreelancer);

//Users
router.post('/users', controller.users.createUser);

//Connections
router.post('/connections', controller.freelancers.createConnection);

router.get('/users', controller.users.get);
router.get('/users/:id', controller.users.getOne);

module.exports = router;