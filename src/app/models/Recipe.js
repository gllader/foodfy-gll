const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`SELECT recipes.*, chefs.name AS chef_name
              FROM recipes
              LEFT JOIN chefs ON (chefs.id = chef_id)
              ORDER BY chef_id`, (err, results)=>{
      if(err) `DATABASE ERROR! ${err}`
      callback(results.rows)
    })
  },
  create(data, callback) {
    const query = `INSERT INTO recipes(
                  image,
                  title,
                  ingredients,
                  preparation,
                  information,
                  created_at
    ) VALUES ($1, $2, $3, $4, $5, $6)`
  
  const values = [
    data.image,
    data.title,
    data.ingredients,
    data.preparation,
    data.information,
    data.created_at = Date.now()
  ]

  db.query(query, values, (err, results)=>{
    if(err) `DATABASE ERROR! ${err}`;
    callback(results.rows[0])
  })

  }
}