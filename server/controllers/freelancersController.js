let Models = require('../models');

const freelancersController = {
  get: (req, res) => {
    console.log('im in the freelancers controller')
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
  },
  createConnection: (req, res) => {
    console.log(req, 'in controller, req')
    Models.freelancers.createConnection(req.body.user_id, req.body.friend_id)
      .then(result => {
        console.log('connection created', result);
        res.status(201).send('success')
      })
  },
  // getConnections: (req, res) => {
  //   Models.freelancer.getConnections(req.params.user_id)
  //     .then(result) => {
  //       console.log()
  //     }
  // }
}

module.exports = freelancersController;