const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT "id", "name", "address", "city", "zipcode", "phone", "email", "website" FROM "organizations" WHERE "id" = $1`
        pool.query(queryText, [req.user.id])
            .then((results) => {
                res.send(results.rows);
            })
            .catch((error) => {
                console.log('Error on Categories GET', error)
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})


router.delete('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const form = req.params.id;
        console.log(form)
        pool.query('DELETE FROM "organizations" WHERE "id" = $1', [form])
            .then((result) => {
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log('error on delete', error);
                res.sendStatus(500);
            });
    }
});


module.exports = router;