const db = require("../../config/db");

module.exports = {
  all(callback) {
    db.query(
            `SELECT chefs.*, count(recipes) AS total_recipes
            FROM chefs
            LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
            GROUP BY chefs.id
            ORDER BY chefs.id ASC`,
      (err, results) => {
        if (err) throw `DATABASE ERROR! ${err}`;
        callback(results.rows);
      }
    );
  },
  create(data, callback) {
    const query = `INSERT INTO chefs(
                  name,
                  avatar_url,
                  created_at
    ) VALUES ($1, $2, $3)`;

    const values = [
      data.name,
      data.avatar_url,
      data.created_at = null
      // data.created_at = Date.now()
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `DATABASE ERROR! ${err}`;
      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(`SELECT chefs.*, count(recipes) AS total_recipes
              FROM chefs
              LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
              WHERE chefs.id = $1
              GROUP BY chefs.id
              ORDER BY chefs.id ASC`, 
    [id], (err, results)=>{
      if(err) throw `DATABASE ERROR! ${err}`;
      callback(results.rows[0])  
    })
  }
};
