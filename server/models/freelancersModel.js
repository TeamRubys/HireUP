const db = require('../db');

const freelancersModel = {
  getAll: () => {
  },
  getOne: async (id) => {
    const freelancer = await db.query(`SELECT f.id, f.user_id, f.role, f.rate, f.skills, f.location, f.education, f.portfolio, f.timestamp, json_agg(json_build_object('company', w.company, 'position', w.position, 'duration', w.duration)) AS work_history
      FROM freelancers f
        INNER JOIN work_history w ON f.id = freelancer_id
       WHERE f.id = $1
       GROUP BY f.id`, [id]);
    return freelancer.rows[0];
  },
  createMessage: async (freelancer) => {
    console.log('freelancer to be inserted:', freelancer);

    const client = await db.connect();

    try {
      await client.query('BEGIN');
      const queryText = 'INSERT INTO freelancers(user_id, role, rate, skills, location, education, portfolio) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id';
      const res = await client.query(queryText, [freelancer.user_id, freelancer.role, freelancer.rate, freelancer.skills, freelancer.location, freelancer.education, freelancer.portfolio]);
      const freelancerId = await res.rows[0].id;
      console.log(freelancerId);

      const historyText = 'INSERT INTO work_history(freelancer_id, company, position, duration) VALUES ($1, $2, $3, $4)';
      let finalRes;
      const workHistory = freelancer.work_history;
      freelancer.work_history.forEach( async (history) => {
        finalRes = await client.query(historyText, [freelancerId, history.company, history.position, history.duration]);
      })
      await client.query('COMMIT');
      return finalRes;
    } catch (e) {
      await client.query('ROLLBACK');
      throw e;
    } finally {
      client.release();
    }
  }
}

module.exports = freelancersModel;