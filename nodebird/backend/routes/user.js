const express = require('express');
const db = require('../models');
const passport = require('passport');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', (req,res) => {
    req.user ? res.json(req.user) : () => {
        req.status(401).send('로그인이 필요합니다.');
        const user =  Object.assign({}, req.user.toJSON());
        delete user.password; 
        return res.json(user);    
    }
});
router.post('/',async(req,res,next) => {
    try{
        const exUser = await db.User.findOne({ 
            where: {
                userId: req.body.userId
            }
        });
        exUser && res.status(403).send('이미 사용중인 아이디입니다.');
        const hashedPassword = await bcrypt.hash(req.body.password, 12); 
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword
        });
        console.log(newUser);
        return res.status(200).json(newUser); 
    } catch(e) {
        console.error(e); 
        //에러 처리를 이 사이에서 
        return next(e);
    }
});
router.get('/:id', (req,res) => {// 남의 정보 가져오는 것  req.params.id로 가져올 수 있습니다. 

});
router.post('/logout', (req,res) => { // /api/user/logout
    req.logout();
    req.session.destroy();
    res.send('logout 성공');
})
router.post('/login', (req,res,next) => {
    passport.authenticate('local', (err, user, info) => {// done 의 1,2,3 번째 인자 
        if(err){
            console.error(err);
            next(err); 
        }
        if(info) {
            return res.status(401).send(info.reason);
        }
        // req.login 은 local의 passport.serializeUser가 실행된다. 
        return req.login(user,async (loginErr) => {
            try{
                if(loginErr) {
                    return next(loginErr);
                }
                const fullUser = await db.User.findOne({
                    where: {id: user.id},
                    include: [{
                        model: db.Post,
                        as: 'Posts',
                        attributes: ['id']
                    },{
                        model: db.User,
                        as: 'Followings',
                        attributes: ['id']
                    },{
                        model: db.User,
                        as: 'Followers',
                        attributes:['id']
                    }],
                    attributes: ['id', 'nickname', 'userId']
                })
                console.log(fullUser);
                return res.json(fullUser);  
                // const filteredUser = Object.assign({} ,user.toJSON());
                // delete filteredUser.password;
            }catch(e){
                next(e);
            }
        })
    })(req,res,next) //kakao, naver 등등 
});
router.get('/:id/follow', (req,res) => { // 몇번 유저팔로우를 가져온다. 

});
router.post('/:id/follow', (req,res) => { // 몇번 유저를 팔로우한다 

});
router.delete('/:id/follow', (req,res)=> {

});
router.delete('/:id/follower', (req,res) => {

});
router.get('/:id/posts', (req,res) => {

});


module.exports = router; 