const express = require('express');
const news = express.Router();
const db = require('../db');

// Trang danh sách hotels
news.get('/', (req, res) => {
    const sql = 'SELECT * FROM news';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('news/index', { news: results });
    });
});

module.exports = news;