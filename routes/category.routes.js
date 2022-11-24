

const {requestValidator} = require ("../middlewares");
const  categoryController = require("../controllers/category.controller")

module.exports = function(app) {

    //Routes to add a category
    app.post("/ecomm/api/v1/categories", [requestValidator.validateCategoryRequest] , categoryController.create)

    //Route to get all categories
    app.get("/ecomm/api/v1/categories", categoryController.findAll)

    app.get("/ecomm/api/v1/categories/:id", categoryController.findOne)

    app.delete("/ecomm/api/v1/categories/:id", categoryController.delete)

    app.put("/ecomm/api/v1/categories/:id", [requestValidator.validateCategoryRequest] , categoryController.update)
}