const router = require('express').Router();
const db = require('../data/dbConfig.js');

router.get('/', (req, res) => {
    db('accounts')
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}); 
router.post('/', function (req,res){
    const newAccount = req.body;
    db("accounts")
    .insert(newAccount)
    .then(id => {
        res.status(200).json({id})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
module.exports = router;