const database = require("../database");
const User = require("./user");
const Inventory = require("./inventory");
const Product = require("./product");

class InventoryMovment {
    constructor(){
        this.model = database.db.define("inventory_movements", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            amount: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false
            },
            userId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: User,
                    key: "id"
                }
            },
            inventoryId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: Inventory,
                    key: "id"
                }
            },
            productId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: Product,
                    key: "id"
                }
            }
        })
        this.model.belongsTo( User, {
            foreignKey: 'userId'
        })
        this.model.belongsTo( Inventory, {
            foreignKey: 'inventoryId'
        })
        this.model.belongsTo( Product, {
            foreignKey: 'productId'
        })
        this.model.hasMany(this.model, {
            foreignKey: 'userId'
        })
        this.model.hasMany(this.model, {
            foreignKey: 'inventoryId'
        })
        this.model.hasMany(this.model, {
            foreignKey: 'productId'
        })
    }
}
module.exports = new InventoryMovment().model
