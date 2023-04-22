const db = require('../db');

const proposalsModel = {
  getAll: () => {
  },
  getOne: async (id) => {
    const proposal = await db.query('SELECT * FROM proposals WHERE id = $1', [id]);
    return proposal.rows[0];
  },
  createProposal: async (proposal) => {
    console.log('proposal to be inserted:', proposal);

    const client = await db.connect();

    try {
      await client.query('BEGIN');
      const queryText = 'INSERT INTO proposal(sender_id, receiver_id, context) VALUES($1, $2, $3) RETURNING id';
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

module.exports = proposalsModel;