const db = require("../database/connection");

const getTables = (req, res) => {
    db.query("SHOW TABLES", (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
};

module.exports = { getTables };