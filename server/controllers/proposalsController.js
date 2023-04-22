let Models = require('../Models');

const proposalsController = {
  get: (req, res) => {
    // Models.messages.getAll()
      // .then ...
  },
  getOne: (req, res) => {
    Models.proposals.getOne(req.params.id)
      .then(result => {
        console.log('successfully retrieved message from database');
        res.send(result);
      })
  },
  createProposal: (req, res) => {
    console.log('message from client', req.body)
    Models.proposals.createProposal(req.body)
      .then(result => {
        console.log('sucessfully created proposal');
        res.send('success');
      })
  }
}

module.exports = proposalsController;