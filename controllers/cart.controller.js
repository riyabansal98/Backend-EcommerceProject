
const db = require("../models");
const Product = db.product;
const Cart = db.cart;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   
    const cart = {
        userId: req.userId
    }

    Cart.create(cart)
    .then(cart => {
        res.status(200).send(cart)
    })
    .catch(err => {
        res.status(500).send({
            message: "Some internal server issue happened"
        })
    })
}