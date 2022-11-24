

const db = require("../models")

const Category = db.category

//POST: Create and save a new category
exports.create = (req, res) => {

    let category = {
        name: req.body.name,
        description: req.body.description
    }

    Category.create(category)
    .then(category => {
       console.log("Category successfully got inserted into the database") 
       res.status(200).send(category)
    })
    .catch(err => {
        console.log("Issue in inserting the category")
        res.send(500).send("Issue in creating the category")
    })
}

//GET: Get the list of all categories
exports.findAll = (req, res) => {

    Category.findAll()
    .then(data => {
        console.log("Category successfully fetched from the database")
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send("Some error occured while retrieving the category")
    })
}

exports.findOne = (req, res) => {

    const categoryId = req.params.id;
    Category.findByPk(categoryId)
    .then(category => {
        //if a user sends in a id which is not present in the db
        if(!category) {
            return res.status(400).send("Please enter valid category id")
        }

        res.status(200).send(category)
    })
    .catch(err => {
        res.status(500).send("Some error occured while retrieving the category based on id")
    })
}

exports.delete = (req, res) => {

    const categoryId = req.params.id;
    Category.destroy({
        where:{
            id: categoryId
        }
    })
    .then(result => {
        res.status(200).send("Successfully deleted the category")
    })
    .catch(err => {
        res.status(500).send("Some error occured while deleting the category based on id")
    })
}

exports.update = (req, res) => {

    const categoryId = req.params.id

    Category.update(req.body, {
        where: {
            id: categoryId
        }
    })
    .then(num => {
        if(num == 1) {
         res.send("Updation Successful")   
        }else{
            res.send("Could not update")
        }
    })
    .catch(err => {
        res.status(500).send("Some error occured while updating the Category")
    })

}
