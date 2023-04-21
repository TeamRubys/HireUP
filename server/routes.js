const controller = require('./controllers');
const router = require('express').Router();

// router.get('/', (req, res) => {
//   console.log('test');
//   res.end('test');
// });

router.get('/messages', controller.messages.get);
router.get('/messages/:id', controller.messages.getOne);
router.post('/messages', controller.messages.createMessage);

module.exports = router;