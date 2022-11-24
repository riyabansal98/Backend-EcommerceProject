const db = require("../models");
const config = require("../configs/auth.config")
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")

exports.signup = (req, res) => {
    
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .then(user => {

        if(req.body.roles) {
            Role.findAll({
                where: {
                    name: {
                        [Op.or] : req.body.roles
                    }
                }
            })
            .then(roles => {
                //populate user_roles table

                user.setRoles(roles)
                .then(() => {
                    res.status(200).send({message: "User registered successfully"})
                })
            })
        }
    })
    .catch(err => {
        res.status(500).send("Unable to add the user " + err.message )
    })
}

