const db = require('../db');

const usersModel = {
  createUser: async ( {user}) => {
    console.log('in usersModel, this is the user object', user);

    var name = user.nickname;
    var email = user.email;
    var s_id = user.sid;

    const client = await db.connect();

    const values = [s_id, name, email]
    //do I need to add logic here for if user does not exist
    const statement = 'INSERT INTO users (s_id, name, email) VALUES ($1, $2, $3) ON CONFLICT (email) DO NOTHING';

    await client.query(statement, values);
  }
}

module.exports = usersModel;