let Models = require('../models');

const freelancersController = {
  get: (req, res) => {
    console.log('im in the messages controller')
    Models.freelancers.getAll(req.query.page, req.query.count)
      .then(result => {
        console.log('successfully retrieved freelancers from database');
        res.send(result);
      })
  },
  getOne: (req, res) => {
    Models.freelancers.getOne(req.params.id)
      .then(result => {
        console.log('successfully retrieved freelancer from database');
        res.send(result);
      })
  },
  createFreelancer: (req, res) => {
    Models.freelancers.createMessage(req.body)
      .then(result => {
        console.log('sucessfully created freelancer', result);
        res.status(201).send('success');
      })
  }
}

module.exports = freelancersController;