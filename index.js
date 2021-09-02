require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const PORT = process.env.port || 5000

const server = express();
server.use(express.json());
server.use(cors());

server.get('/api/users', (req, res) => {
    res.json({ message: 'Get Users' })
})

server.post('/api/register', (req, res) => {
    res.json({ message: 'Register' })

})

server.post('/api/login', (req, res) => {
    res.json({ message: 'Login' })

})

server.get('/', (req, res) => {
    res.send(`<h1>Hello!</h1>`)
  })

server.listen(PORT, () => {
    console.log(`\n *Listening on ${PORT}* \n`);
})