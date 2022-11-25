

const {requestValidator, authjwt} = require("../middlewares")
const productController = require("../controllers/product.controller")

module.exports = function(app) {

    app.post("/ecomm/api/v1/products", [requestValidator.validateProductRequest, authjwt.verifyToken] ,productController.create)

    app.get("/ecomm/api/v1/products", productController.findAll)

    app.get("/ecomm/api/v1/products/:id", productController.findOne)

    app.put("/ecomm/api/v1/products/:id", [requestValidator.validateProductRequest, authjwt.verifyToken] ,productController.update)

    app.delete("/ecomm/api/v1/products/:id", [authjwt.verifyToken] ,productController.delete)

    app.get("/ecomm/api/v1/categories/:categoryId/products", productController.getProductsUnderCategory)
}