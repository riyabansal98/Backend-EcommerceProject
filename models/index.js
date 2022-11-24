
const config = require("../configs/db.config")
const Sequelize = require("sequelize")

const seq = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
);

const db = {}

db.Sequelize = Sequelize;
db.sequelize = seq
db.role = require('./role.model.js')(db.sequelize, Sequelize)
db.user = require('./user.model.js')(db.sequelize, Sequelize)
db.category = require('./category.model.js')(db.sequelize, Sequelize)
db.product = require('./product.model.js')(db.sequelize, Sequelize)

//Establishing relationship between Role and User: Many to Many

//User to Role -> One to Many

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId"
})

//Role to User -> One to Many

db.role.belongsToMany(db.user, {
    through: "user_roles",
    forignKey: "roleId"
})

db.category.hasMany(db.product)
module.exports = db
