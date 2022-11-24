

const db = require("../models")   //index.js
const Op = db.Sequelize.Op;
const Product = db.product;

exports.create = (req, res) => {

   let product = {
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    categoryId: req.body.categoryId
   } 

   Product.create(product)
   .then(product => {
        console.log("product has been inserted into the db")
        res.status(200).send(product)
   })
   .catch(err => {
        res.status(500).send("Error while adding the product to the database")
   }) 
}

exports.findAll = (req, res) => {

     let productName = req.query.name;
     let minCost = req.query.minCost; //80000
     let maxCost = req.query.maxCost; //90000

     //get all products
     //select * from products where cost >= 80000

     let promise;
     if(productName) {

          promise = Product.findAll({
               where: {
                    name: productName
               }
          })
     }else if(minCost && maxCost) {
          promise = Product.findAll({
               where: {
                    cost: {
                         [Op.gte] : minCost,
                         [Op.lte]: maxCost
                    }
               }
          })
     }else if(minCost) {

          promise = Product.findAll({
               where: {
                    cost: {
                         [Op.gte] : minCost
                    }
               }
          })
     }else if(maxCost) {

          promise = Product.findAll({
               where: {
                    cost: {
                         [Op.lte]: maxCost
                    }
               }
          })
     }else{

          //no query params have been passed.
          promise = Product.findAll()
     }
     


     promise
     .then(data => {
          console.log("Product successfully fetched from the database")
          res.status(200).send(data)
      })
      .catch(err => {
          res.status(500).send("Some error occured while retrieving the Product")
      })
}

exports.findOne = (req, res) => {

     let productId = req.params.id
     Product.findByPk(productId)
     .then(product => {
          //if a user sends in a id which is not present in the db
          if(!product) {
              return res.status(400).send("Please enter valid product id")
          }
  
          console.log("Product successfully fetched from the database based on id")
          res.status(200).send(product)
      })
      .catch(err => {
          res.status(500).send("Some error occured while retrieving the product based on id")
      })

}

exports.update = (req, res) => {

     let productId = req.params.id;

     Product.update(req.body, {
          where: {
               id: productId
          }
     })
     .then(num => {
          if(num == 1) {
           res.status(200).send("Updation Successful")   
          }else{
              res.status(400).send("Could not update")
          }
      })
      .catch(err => {
          res.status(500).send("Some error occured while updating the Product")
      })
}

exports.delete = (req, res) => {

     let productId = req.params.id;

     Product.destroy({
          where: {id: productId}
     })
     .then(result => {
          res.status(200).send("Successfully deleted the product")
      })
      .catch(err => {
          res.status(500).send("Some error occured while deleting the product based on id")
      })
}

exports.getProductsUnderCategory = (req, res) => {

     const categoryId = req.params.categoryId;

     Product.findAll({
          where: {
               categoryId: categoryId
          }
     })
     .then(products => {
          res.status(200).send(products)
     })
     .catch(err => {
          res.status(500).send("Some internal error while fetching the products based on category id")
     })
}