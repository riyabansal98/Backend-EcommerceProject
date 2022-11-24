


module.exports = (sequelize, Sequelize) => {

    let Product = sequelize.define("product", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },{
        tableName: "products"
    })

    return Product;
}
