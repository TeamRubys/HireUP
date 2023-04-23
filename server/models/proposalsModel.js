const db = require('../db');

const proposalsModel = {
  getAll: async (page = 1, count = 5) => {
    const first = (page - 1) * count + 1;
    const last = page * count;
    const proposals = await db.query(`SELECT p.id, p.headline, p.overview, p.skills, p.estimated_timeline, p.locations, p.budget, p.timestamp, u.name AS poster_name, u.email AS poster_email
      FROM business_proposals p
        INNER JOIN users u ON p.user_id = u.id
      WHERE p.id BETWEEN $1 AND $2 GROUP BY p.id, u.name, u.email ORDER BY p.id ASC`, [first, last]);
    return proposals.rows;
  },
  getOne: async (id) => {
    const proposal = await db.query(`SELECT p.id, p.headline, p.overview, p.skills, p.estimated_timeline, p.locations, p.budget, p.timestamp, u.name AS poster_name, u.email AS poster_email
      FROM business_proposals p
        INNER JOIN users u ON p.user_id = u.id
      WHERE p.id = $1`, [id]);
    return proposal.rows[0];
  },
  createProposal: async (proposal) => {
    console.log('proposal to be inserted:', proposal);

    const client = await db.connect();

    try {
      await client.query('BEGIN');
      const queryText = 'INSERT INTO business_proposals(user_id, headline, overview, skills, estimated_timeline, locations, budget) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id';
      const res = await client.query(queryText, [proposal.user_id, proposal.headline, proposal.overview, proposal.skills, proposal.estimated_timeline, proposal.locations, proposal.budget]);
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