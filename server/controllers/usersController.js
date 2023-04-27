let Models = require('../models');

const usersController = {
  createUser: (req, res) => {
    Models.users.createUser(req.body)
      .then(result => {
        console.log('sucessfully created user');
        res.status(201).send('success');
      })
  },
  get: (req, res) => {
    console.log('im in the users controller')
    Models.users.getAll(req.query.page, req.query.count)
      .then(result => {
        console.log('successfully retrieved user from database');
        res.send(result);
      })
  },
  getOne: (req, res) => {
    Models.users.getOne(req.params.id)
      .then(result => {
        console.log('successfully retrieved user from database');
        res.send(result);
      })
  }
}

module.exports = usersController;