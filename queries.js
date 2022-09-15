const Pool = require('pg').Pool
const pool = new Pool({
  user: 'user-name',
  host: 'host-name',
  database: 'name-of-database',
  password: 'password',
  port: 5432,
})
// Create Polygon Query
const createPolygon = (req, res) => {
  pool.query('INSERT INTO geofence (geom) values (ST_GeomFromGeoJSON($1))', [req.body.poly], function(err){
    if (err) {
      return console.log(err.message);
    }
    console.log("New Polygon has been added");
  })
}
// Point in Polygon Query 
pool.query('SELECT * FROM geofence WHERE ST_Contains (ST_SetSrid(geom,4326),ST_SetSrid(ST_Point(77.07501411437988,28.661219333752125),4326))',(err,res)=>{
  if (err) {
    console.log(err.message);
  }
  console.log(res.rows);
})
module.exports = {createPolygon}


