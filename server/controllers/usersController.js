let Models = require('../models');

const usersController = {
  createUser: (req, res) => {
    Models.users.createUser(req.body)
      .then(result => {
        console.log('sucessfully created user');
        res.status(201).send('success');
      })
  }
}

module.exports = usersController;