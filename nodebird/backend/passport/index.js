const passport = require('passport');
const db = require('../models');
const local = require('./local'); 

module.exports = () => {
    // 가벼운 정보로 변환해서 서버에 저장 
    passport.serializeUser( (user,done) => { // 서버쪽에 [{id:3, cookie: 'asdfgh'}]
        return done(null, user.id); //return 안해줘도 상관없음 
    });

    passport.deserializeUser( async(id, done) => {
        try{
            const user = await db.User.findOne({
                where: {id},
            });
            return done(null, user); //불러온 user정보는 req.user 에 저장 
            //req.use에는 사용자 정보가 들어간다. 
        } catch(e) {
            console.error(e); 
            return done(e);
        }
    })

    local(); 
};

//프론트에서 서버로는 cookie만 보낸다. (asdfgh)
// 서버가 쿠키파서, 익스프레스 세션으로 쿠키 검사 후 id: 3 발견 
// 발견하고 deserializeUser 실행시킴 
// id: 3이 deserializeUser에 들어감 
// req.user 도 사용자 정보가 들어감 


// deserializeUser는 프로트에서 서버로 요청을 보낼때마다 실행됨  (db 요청 한번씩 실행) 
// 실무에서는 deserializeUser 결과물 캐싱 