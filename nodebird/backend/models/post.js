module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        content: {
            type: DataTypes.TEXT, // 매우 긴 글 
            allowNull: false 
        },
    }, {
        charset: 'utf8mb4', // 한글 + 이모티콘 
        collate: 'utf8mb4_general_ci' 
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); // 닭발 받는 쪽. hasMany의 반대 
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsTo(db.Post, {as: 'Retweet'});
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'}); //다른 테이블에도 동일하게 적용 
        db.Post.belongsToMany(db.User, {through: 'Like', as: 'Likers'}); 
    }
    return Post;
}