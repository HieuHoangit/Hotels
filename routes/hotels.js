const express = require('express');
const router = express.Router();
const db = require('../db');

// Trang danh sách hotels
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM hotels';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('hotels/index', { hotels: results });
    });
});

// Trang tạo mới hotel
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

// Trang chỉnh sửa hotel
router.get('/edit/:id', (req, res) => {
    const sql = 'SELECT * FROM hotels WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.render('hotels/edit', { hotel: result[0] });
    });
});

router.post('/edit/:id', (req, res) => {
    const { name, price } = req.body;
    const sql = 'UPDATE hotels SET name = ?, price = ? WHERE id = ?';
    db.query(sql, [name, price, req.params.id], (err, result) => {
        if (err) throw err;
        res.redirect('/hotels');
    });
});

// Xóa hotel
router.post('/delete/:id', (req, res) => {
    const sql = 'DELETE FROM hotels WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.redirect('/hotels');
    });
});

module.exports = router;
