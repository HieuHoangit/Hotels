const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Cấu hình Express
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Định nghĩa các route ở đây
const hotelRoutes = require('./routes/hotels');
const newRoutes = require('./routes/news');
app.use('/hotels', hotelRoutes);
app.use('/news', newRoutes);

// Trang chủ
app.get('/', (req, res) => {
    res.render('index', { title: 'Hello Gooup1' });
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});