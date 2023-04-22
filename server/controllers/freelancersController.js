let Models = require('../Models');

const messagesController = {
  get: (req, res) => {
    console.log('im in the messages controller')
    // Models.messages.getAll()
      // .then ...
  },
  getOne: (req, res) => {
    Models.freelancers.getOne(req.params.id)
      .then(result => {
        console.log('successfully retrieved freelancer from database');
        res.send(result);
      })
  },
  createFreelancer: (req, res) => {
    console.log('message from client', req.body)
    Models.freelancers.createMessage(req.body)
      .then(result => {
        console.log('sucessfully created freelancer', result);
        res.send('success');
      })
  }
}

module.exports = messagesController;