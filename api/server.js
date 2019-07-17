const express = require('express');
const accountRouter = require('../accounts/account-router.js')
const server = express();

server.use(express.json());
server.get("/", (req, res) =>{
    res.send("api is up and running")
})
server.use('/api/accounts', accountRouter)

module.exports = server;