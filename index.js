require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const PORT = process.env.port || 5000

const server = express();
server.use(express.json());
server.use(cors());

server.get('/api/users', (req, res) => {
 console.log('Get Users')
})

server.post('/api/register', (req, res) => {
    console.log('Register')

})

server.post('/api/login', (req, res) => {
    console.log('Login')

})

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })

server.listen(PORT, () => {
    console.log(`\n *Listening on ${PORT}* \n`);
})