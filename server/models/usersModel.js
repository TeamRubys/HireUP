const db = require('../db');

const usersModel = {
  createUser: async ( {user}) => {
    var name = user.nickname;
    var email = user.email;
    var s_id = user.sid;

    const client = await db.connect();

    const values = [s_id, name, email]
    //do I need to add logic here for if user does not exist
    const statement = `INSERT INTO users (s_id, name, email)
    VALUES ($1, $2, $3)
    ON CONFLICT (email)
    DO UPDATE SET s_id = EXCLUDED.s_id, name = EXCLUDED.name
    RETURNING id`;


    const result = await client.query(statement, values);
    const userId = result.rows[0].id;
    console.log(userId);
    return userId;
  }  getAll: (id) => {
    return db.query('SELECT * FROM users')
  },
  getOne: async (id) => {
    const message = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return message.rows[0];
  },


module.exports = usersModel;