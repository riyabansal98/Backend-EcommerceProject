const express = require("express")
const serverConfig = require('./configs/server.config')
const bodyparser = require('body-parser')

//initialising express
const app = express()

//middleware -> bodyparser

/**
 * Using body parser middleware
 * 
 * Used for parsing the request
 * Parsing the request of type json and convert to the object
*/

app.use(bodyparser.json())

/**
 * Initilising Database
 */

const db = require("./models")
const Role = db.role;



db.sequelize.sync()
.then(() => {
    console.log('Database Synced')
    //init()
})

function init() {
    
    Role.create({
        id: 1,
        name: "user"
    });
    Role.create({
        id: 2,
        name: "admin"
    });

}

require('./routes/category.routes')(app)
require('./routes/product.routes')(app)
require('./routes/auth.routes')(app)
app.listen( serverConfig.PORT , () => {
    console.log(`Application started : ${serverConfig.PORT}` )
})
