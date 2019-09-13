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

router.post('/get-users', async (req, res) => {
  // res.json({
  //   msg:'hey you found me'
  // })
  console.log(req.body);

  const getUserQuery = `
  SELECT * FROM users
  WHERE name = $1
  `
  const getUser = await db.any(getUserQuery, req.body.name)

  res.json({
    msg: getUser
  })

})

module.exports = router;
