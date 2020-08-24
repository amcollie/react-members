require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const getMembers = async (req, res) => {
    try {
        const allMembers = await pool.query('SELECT * FROM registered ORDER BY id ASC');

        res.status(200).json(allMembers.rows)
    } catch (err) {
        res.status(400).json({msg: "Fetch request failed"});
    }
};

const getMemberById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const allMembers = await pool.query('SELECT * FROM registered WHERE id = $1', [id]);

        res.status(200).json(allMembers.rows[0]);
    } catch (err) {
        res.status(400).json({msg: "Fetch request failed"});
    }
};

const createMember = async (req, res) => {
    try {
        const { email, is_registered } = req.body;

        const newMember = await pool.query('INSERT INTO registered (email, is_registered) VALUES ($1, $2)', [email, is_registered]);

        res.status(201).send(newMember.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({msg: "Create request failed"});
    }
};

const updateMember = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const { email, is_registered } = req.body;

        const updateMember = await pool.query('UPDATE registered SET email = $1, is_registered = $2 WHERE id = $3',  [email, is_registered, id]);

        res.status(200).send(`Member with id ${id} was updated`);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({msg: "Update request failed"});
    }
};

const deleteMember = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const deleteMember = await pool.query('DELETE FROM registered WHERE id = $1', [id]);

        res.status(200).send(`Member deleted with ID: ${id}`);
    }  catch (err) {
        res.status(400).json({msg: "Delete request failed"});
    } 
};

module.exports = {
    getMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
}
