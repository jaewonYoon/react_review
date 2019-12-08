module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { //테이블 명 저절로 users로 바뀜 
        nickname: {
            type: DataTypes.STRING(20), //20글자 이하 
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(100), //100글자 이하 
            allowNull: false,
        },
    }, {
        //한글 설정 
        charset: 'utf8',
        collate: 'utf8_general_ci',
        //tableName: 'posts'  옵션 선택사항 시퀄라이즈에서 자동으로 함  
    }); 
    // one to many 관계 설정 
    User.associate = (db) => {
        db.User.hasMany(db.Post, {as: 'Post'});
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked'});
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers'});
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings'})
    };
    return User;
}

// const user = {
//     id: 1,
//     nickname: 'jay',
//     Liked: [{게시글1}, {게시글2}, {게시글3}]
//     Followers: [{사용자1}, {사용자2}, {사용자3}]
// }