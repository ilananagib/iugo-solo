const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get ('/', (req, res) => {
    let queryText = `SELECT "name", "address", "city", "zipcode", "phone", "email", "website" FROM "organizations"`
    pool.query(queryText)
.then((results) => {
    res.send(results.rows);
})
.catch((error) => {
    console.log('Error on Categories GET', error)
    res.sendStatus(500);
})
})

module.exports = router;

