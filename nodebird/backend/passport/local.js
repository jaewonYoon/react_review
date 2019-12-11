// 전략 .. passport 는 전략이라는 단어를 사용한다. 
const passport = require('passport');
const {Strategy: LocalStrategy} = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField : 'userId', //프론트에서 req.body.userId 와 
        passwordField: 'password', // req.body.password 로 받아들인다.
    }, async (userId, password, done) => {
        try{
            //어떤 사람을 로그인 시킬 것인가. 
            const user = await db.User.findOne({where: {userId}}); // 유저있는지 찾고 
            if(!user) {// 없으면 안됨 
                return done(null, false, {reason: '존재하지 않는 사용자입니다.'}); 
                //done 의 첫번째 인자는 서버쪽 에러 , 두번쨰는 성공했을때 , 세번쨰는 서버쪽 에러가 아니라 
                // 로직상으로 강제로 종료해야 할 때 
            }
            const result = await bcrypt.compare(password, user.password); 
            if(result){ 
                return done (null, user);
            }
            return done (null, false, {reason: '비밀번호가 틀립니다'}); 
        }catch(e) {
            console.error(e);
            return done(e); 
        }
    }));
}