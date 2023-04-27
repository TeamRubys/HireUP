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
    Models.freelancers.createConnection(req.body.user_id, req.body.friend_id)
      .then(result => {
        if(!result) {
          console.log(result, 'createConnection, if there is a conflict')
          res.status(201).send('You are already connected!')
        } else {
          res.status(201).send('success')
        }

      })
      .catch(err => {
        console.log(err);
        res.status(201).send('Already friends')
      })
  },
  getConnectionsById: (req, res) => {
    Models.freelancers.getConnectionsById(req.params.id)
      .then(result => {
        console.log('connections acquired', result);
        res.status(200).send(result)
      })
  }

}

module.exports = freelancersController;