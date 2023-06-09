let Models = require('../models');

const messagesController = {
  get: (req, res) => {
      console.log(req.query.id)
      Models.messages.getAll(req.query.id)
        .then(result => {
          res.send(result.rows);
        })
        .catch(err => {
          console.log(err)
          res.status(500).send('Error fetching messages')
        })
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