
const db = require("../models");
const Product = db.product;
const Cart = db.cart;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   
    const cart = {
        cost: 0,
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

exports.update = (req, res) => {

    let cartId = req.params.id;   // 2
    let oldCost = 0; //cost of items already existing in the cart

    Cart.findByPk(cartId)  ///finding the cart in the database (cart table)
    .then(cart => {
        oldCost = cart.cost;
        
        Product.findAll({    //finding all the products to be added to the cart
            where: {
                id: req.body.productIds
            }
        })
        .then(items => {
            cart.setProducts(items) // add those products to the cart products table
            .then(() => {

                var NewCost = 0;
                cart.getProducts()
                    .then(products => {
                        
                        //add the cost of all the items in the cart
                        for(i = 0; i < products.length; i++) {
                            NewCost = NewCost + products[i].cost
                        }

                        //updating the final cost in the cart table. 
                        Cart.update({cost: oldCost + NewCost}, {where: {id: cartId}})
                        
                        res.status(200).send({
                            message: "Successfully added items to the cart"
                        })
                    })
            })
        })
        .catch(err => {
            res.status(500).send("Some internal error happened while fetching product details")
        })
    })
    .catch(err => {
        res.status(500).send("Some internal server error happened while fetching cart details")
    })
}

exports.getCart = (req, res) => {

    Cart.findByPk(req.params.cartId)
    .then(cart => {

        let ProductsSelected = [];

        cart.getProducts()
        .then(products => {

            for(let i = 0; i < products.length; i++) {
                ProductsSelected.push({
                    id: products[i].id,
                    name: products[i].name,
                    cost: products[i].cost
                })
            }

            res.status(200).send({
                id: cart.id,
                productsSelected: ProductsSelected,
                cost: cart.cost
            })
        })
    })
}

