let Models = require('../models/messagesModel');

const messagesController = {
  get: (req, res) => {
    console.log('im in the messages controller')
    // Models.messages.getAll()
      // .then ...
  },
  getOne: (req, res) => {
    Models.messages.getOne(req.params.id)
      .then(result => {
        console.log('successfully retrieved message from database');
        res.send(result);
      })
  },
  createMessage: (req, res) => {
    console.log('message from client', req.body)
    Models.messages.createMessage(req.body)
      .then(result => {
        console.log('sucessfully created message');
        res.send('success');
      })
  }
}

module.exports = messagesController;