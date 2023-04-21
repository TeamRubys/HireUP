const db = require('../db');

const messagesModel = {
  getAll: () => {
  },
  getOne: async (id) => {
    const message = await db.query('SELECT * FROM messages WHERE id = $1', [id]);
    return message.rows[0];
  },
  createMessage: async (message) => {
    console.log('message to be inserted:', message);

    const client = await db.connect();

    try {
      await client.query('BEGIN');
      const queryText = 'INSERT INTO messages(sender_id, receiver_id, context) VALUES($1, $2, $3) RETURNING id';
      const res = await client.query(queryText, [message.sender_id, message.receiver_id, message.context]);
      await client.query('COMMIT');
    } catch (e) {
      await client.query('ROLLBACK');
      throw e;
    } finally {
      client.release();
    }
  }
}

module.exports = messagesModel;