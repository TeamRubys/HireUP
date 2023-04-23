let Models = require('../Models');

const proposalsController = {
  get: (req, res) => {
    Models.proposals.getAll(req.query.page, req.query.count)
      .then(result => {
        console.log('successfully retrieved proposals from database');
        res.send(result);
      })
  },
  getOne: (req, res) => {
    Models.proposals.getOne(req.params.id)
      .then(result => {
        console.log('successfully retrieved proposal from database');
        res.send(result);
      })
  },
  createProposal: (req, res) => {
    Models.proposals.createProposal(req.body)
      .then(result => {
        console.log('sucessfully created proposal');
        res.status(201).send('success');
      })
  }
}

module.exports = proposalsController;