const db = require("../db");

const freelancersModel = {
  getAll: async (page = 1, count = 5) => {
    const first = (page - 1) * count + 1;
    const last = page * count;
    const freelancers = await db.query(
      `SELECT f.id, f.user_id, f.role, f.rate, f.skills, f.location, f.education, f.portfolio, f.timestamp, json_agg(json_build_object('company', w.company, 'position', w.position, 'duration', w.duration, 'description', description)) AS work_history, u.name AS freelancer_name, u.email AS freelancer_email
      FROM freelancers f
        INNER JOIN work_history w ON f.id = freelancer_id
        INNER JOIN users u ON f.user_id = u.id
      WHERE f.id BETWEEN $1 AND $2 GROUP BY f.id, u.name, u.email ORDER BY f.id ASC`,
      [first, last]
    );
    return freelancers.rows;
  },
  getOne: async (id) => {
    const freelancer = await db.query(
      `SELECT f.id, f.user_id, f.role, f.rate, f.skills, f.location, f.education, f.portfolio, f.timestamp, json_agg(json_build_object('company', w.company, 'position', w.position, 'duration', w.duration, 'description', w.description)) AS work_history, u.name AS freelancer_name, u.email AS freelancer_email
      FROM freelancers f
        INNER JOIN work_history w ON f.id = freelancer_id
        INNER JOIN users u ON f.user_id = u.id
       WHERE f.id = $1
       GROUP BY f.id, u.name, u.email`,
      [id]
    );
    return freelancer.rows[0];
  },
  createMessage: async (freelancer) => {
    console.log("freelancer to be inserted:", freelancer);

    const client = await db.connect();

    try {
      await client.query("BEGIN");
      const queryText =
        "INSERT INTO freelancers(user_id, role, rate, skills, location, education, portfolio) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id";
      const res = await client.query(queryText, [
        freelancer.user_id,
        freelancer.role,
        freelancer.rate,
        freelancer.skills,
        freelancer.location,
        freelancer.education,
        freelancer.portfolio,
      ]);
      const freelancerId = await res.rows[0].id;
      console.log(freelancerId);

      const historyText =
        "INSERT INTO work_history(freelancer_id, company, position, duration, description) VALUES ($1, $2, $3, $4, $5)";
      let finalRes;
      const workHistory = freelancer.work_history;
      freelancer.work_history.forEach(async (history) => {
        finalRes = await client.query(historyText, [
          freelancerId,
          history.company,
          history.position,
          history.duration,
          history.description,
        ]);
      });
      await client.query("COMMIT");
      return finalRes;
    } catch (e) {
      await client.query("ROLLBACK");
      throw e;
    } finally {
      client.release();
    }
  },
    createConnection: async (userId, friendId) => {
      console.log('UserID:', userId);
      console.log('FriendId:', friendId);

      const client = await db.connect();

       try {
        await client.query('BEGIN');
        const queryText = 'INSERT INTO connections (user_id, friend_id) VALUES ($1, $2) ON CONFLICT DO NOTHING;';
        const res = await client.query(queryText, [userId, friendId]);
        await client.query('COMMIT');
        const res1 = await client.query(queryText, [friendId, userId]);
        await client.query('COMMIT');

       } catch(e) {
        await client.query('ROLLBACK');
        throw e;
       } finally {
        client.release();
       }
    },
     getConnectionsById: async (userId) => {
      const connections = await db.query(`SELECT friend_id FROM connections WHERE user_id = $1`, [userId]);
      return connections.rows;
     }
}

module.exports = freelancersModel;
