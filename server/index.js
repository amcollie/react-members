require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const db = require('./queries');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// if (process.env.NODE_ENV.trimEnd() === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
// }

app.get('/', (req, res) => {
    res.status(200).json('Welcome to Members API');
});


app.get('/members', db.getMembers);
app.get('/members/:id', db.getMemberById);
app.post('/members', db.createMember);
app.put('/members/:id', db.updateMember);
app.delete('/members/:id', db.deleteMember);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});