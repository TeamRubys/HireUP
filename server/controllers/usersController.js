let Models = require('../models');

const usersController = {
  createUser: (req, res) => {
    Models.users.createUser(req.body)
      .then(result => {
        console.log('sucessfully created or logged in user, user id:', result);
        res.status(201).send({id: result});
      })
      .catch(err => console.log(err, 'USERS CONTROLLER'))
  },
  get: (req, res) => {
    console.log('im in the users controller')
    Models.users.getAll(req.query.page, req.query.count)
      .then(result => {
        console.log('successfully retrieved user from database', result);
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