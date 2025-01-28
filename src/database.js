const {Sequelize} = require("sequelize")

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize ({
            host: "10.0.0.199",
            port: "3306",
            database:"udemy-inventory",
            username:"root",
            password:"Alex01lo",
            dialect: "mysql"
        })
    }
}
module.exports = new Database()