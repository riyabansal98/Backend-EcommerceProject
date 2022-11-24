

const db = require("../models")
const Category = db.category;

const validateCategoryRequest = (req, res, next) => {
    //{name, description}
    if(!req.body.name) {
        res.status(400).send("Name of the category can't be empty")
    }

    next();
}

const validateProductRequest = (req, res, next) => {
    //{name, description, categoryId}
    
    //1. Product name passed is not null
    //2. Product have a category Id passed to it all the time

    //where the product name is not present in the request body
    if(!req.body.name) {
        res.status(400).send("Name of the product can't be empty. ")
        return;
    }
    
    if(req.body.categoryId) {

        Category.findByPk(req.body.categoryId)
        .then(category => {
            if(!category) {
                res.status(400).send("Category id that is passed is not available")
                return;
            }

            next();
        })
        .catch(err => {
            res.status(500).send("Some internal error while fetching the product details")
        })

    }else{

        //Category Id is not present in the request body
        res.status(400).send("Category Id cannot be null")
    }

}

module.exports = {
    validateCategoryRequest: validateCategoryRequest,
    validateProductRequest: validateProductRequest
}

