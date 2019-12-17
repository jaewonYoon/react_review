const express = require('express');
const db = require('../models'); 
const router = express.Router();

router.post('/',async(req,res,next) => { //api/post 
    try {
        const hashtags = req.body.content.match('/#[^\s]+\g');
        const newPost = await db.Post.create({
            content: req.body.content, // ex) jay파이팅 #구독 #좋아요 눌러주세요. 
            UserId: req.user.id 
        });
        if(hashtags) {
            const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({ //없으면 만들고 있으면 아무것도 안하고
                where: {name: tag.slice(1).toLowerCase()} //# 때고 영어 대문자 소문자로 고치고 
            })));          
            await newPost.addHashtags(result.map( r => r[0]));  
        }
        // const User = await newPost.getUser();
        // newPost.User = User;
        const fullPost = await db.Post.findOne({
            where: { id: newPost.id},
            include: [{
                model: db.User, 
            }]
        });
        res.json(fullPost);
    }catch(e) {
        console.error(e);
        next(e);
    }

});

router.post('/images', (req,res) =>{

});

module.exports = router; 