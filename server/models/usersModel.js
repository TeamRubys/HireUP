const db = require('../db');

const usersModel = {
  createUser: async (id, name, email) => {
    console.log('in usersModel, user id:', id, 'name:', name, 'email:', email);
    const client = await db.connect();

    const values = [id, name, email]

    const statement = 'INSERT INTO users (s_id, name, email) VALUES ($1, $2, $3)';

    await client.query(statement, values);
  }
}

module.exports = usersModel;