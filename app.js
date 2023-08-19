const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();
// const exhibitionRouter = require('/routes/exhibition');
const postDetailRouter = require('./routes/postDetail.routes');
const {sequelize} = require("./models");
const bodyParser = require('body-parser');

const app = express();
app.set('port', process.env.PORT || 8081);

sequelize.sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//         httpOnly: true,
//         secure: false,
//     }
// }));

app.use('/postDetail',postDetailRouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
});


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
})