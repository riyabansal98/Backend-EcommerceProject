
module.exports = {
   development: { 
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "root",
    DB: "ecom_db",
    dialect: "mysql" //Sequelize is connecting to mysql db
   },
   production: {
    HOST: "sql6.freemysqlhosting.net",
    USER: "sql6582545",
    PASSWORD: "root",
    DB: "sql6582545",
    dialect: "mysql" //Sequelize is connecting to mysql db
   }
}
