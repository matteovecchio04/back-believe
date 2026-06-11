const db = require("../database/connection");

const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
};

module.exports = { getUsers };