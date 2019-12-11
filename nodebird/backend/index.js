const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport'); 
const db = require('./models'); 
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

dotenv.config(); 
const app = express();
db.sequelize.sync();
passportConfig();  // passport/index.js에서 정의한 Strategy 적용 

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET)); //쿠키 암호화 값 같이 넣어주기 
app.use(expressSession({
    resave: false, //매번 세션 강제 저장 
    saveUninitialized: false, // 빈 값도 저장,
    secret: process.env.COOKIE_SECRET,  // 쿠키 암호화
    cookie: {
        httpOnly: true, //자바스크립트로 쿠키 접근 넘김 
        secure: false, // https를 쓸 때 true 
    }
}));
app.use(passport.initialize()); //passport 는 expressSession을 사용하기 때문에 미들웨어 밑에 적어줘야한다. 
app.use(passport.session());


//API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구 
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter); 
app.use('/api/posts', postsAPIRouter); 

app.listen(3002, () =>{
    console.log('server is running on localhost:3002');
})