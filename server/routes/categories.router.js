const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get ('/:id', (req, res) => {
    const queryText = `SELECT "name", "address", "city", "zipcode", "phone", "email", "website" FROM "organizations" WHERE "categories_id" = $1`
    pool.query(queryText, [req.params.id])
.then((results) => {
    res.send(results.rows);
})
.catch((error) => {
    console.log('Error on Categories GET', error)
    res.sendStatus(500);
})
})

module.exports = router;

