var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setup', async (req, res) => {
  const { name, budget} = req.body;
  const insertQuery = `
    INSERT INTO users (name, budget)
    VALUES 
      ($1, $2)
    RETURNING id
  `
  const inserted = await db.one(insertQuery, [name, budget])
  res.json({
    msg: 'added!'
  });
})

router.get('/get-users', (req, res) => {
  res.json({
    msg:'hey you found me'
  })
})

module.exports = router;
