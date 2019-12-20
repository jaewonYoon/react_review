const express = require('express');
const db = require('../models');
 
const router = express.Router();

router.get('/', async(req,res) => {
    try{
        const posts = await db.Post.findAll({
            include:[{
                model: db.User,
                attributes:['id','nickname']
            }]
        });
        res.json(posts);
    }catch(e){
        console.error(e); 
        next(e);
    } 
})
// router.get('/', async (req,res,next) => { //GET /api/posts
//     try{
//         const posts = await db.Post.findAll({
//             include: [{
//                 model: db.User,
//                 attributes: ['id', 'nickname'] 
//             }],
//             order:[['createdAt', 'DESC']]
//         })
//         console.log(posts); 
//         res.json(posts);
//         // res.send(JSON.stringify(posts));
//     }catch(e){
//         console.error(e);
//         next(e);
//     }
// });

module.exports = router; 