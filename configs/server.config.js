if(process.env.NODE_ENV != 'production') {
    require('dotenv').config() //this line will not get executed in prod env
}

//dev
// process.env.NODE_ENV -> dev
//if( dev != production)

//prod
//process.env.NODE_ENV -> production
//if(production != 'production')

module.exports = {
    PORT: process.env.PORT
}


//dotenv -> npm module
//dotenv basically load your .env file

//9:50