const db = require('../../config/db');

module.exports = {
  list(callback) {
    db.query(`SELECT recipes.*, chefs.name AS chef_name
              FROM recipes
              LEFT JOIN chefs ON (chefs.id = chef_id)
              ORDER BY chef_id`, (err, results)=>{
      if(err) `DATABASE ERROR! ${err}`
      callback(results.rows)
    })
  }
}
