const express = require('express');
const cors = require('cors');

const db = require('./queries');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('Welcome to Members API');
});

app.get('/members', db.getMembers);
app.get('/members/:id', db.getMemberById);
app.post('/members', db.createMember);
app.put('/members/:id', db.updateMember);
app.delete('/members/:id', db.deleteMember);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});