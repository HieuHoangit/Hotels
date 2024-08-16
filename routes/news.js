const express = require('express');
const router = express.Router();
const db = require('../db');

// Trang danh sách hotels
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM news';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('news/index', { news: results });
    });
});

router.get('/create', (req, res) => {
    res.render('hotels/create');
});

router.post('/create', (req, res) => {
    const { name, price } = req.body;
    const sql = 'INSERT INTO hotels (name, price) VALUES (?, ?)';
    db.query(sql, [name, price], (err, result) => {
        if (err) throw err;
        res.redirect('/hotels');
    });
});

module.exports = router;