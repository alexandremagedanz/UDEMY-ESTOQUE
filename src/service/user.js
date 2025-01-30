const modelUser = require("../model/user");
const bcrypt = require('bcrypt')

const roles = ['admin','employee']
const salt = 12

class ServiceUser {

    async FindAll(organizationId, transaction) {
        return modelUser.findAll(
            {where: {organizationId}, transaction } 
        )
    }
    async FindById(organizationId, id, transaction) {
        return modelUser.findOne(
            {where: {organizationId, id}, transaction } 
        )
    }

    async Create(organizationId, name, email, password, role, transaction) {
        if (!organizationId) {
            throw new Error('Favor informar a organização')
        } else if (!name) {
            throw new Error('Favor informar o nome')
        } else if (!email) {
            throw new Error('Favor informar o email')
        } else if (!password) {
            throw new Error('Favor informar a senha')
        } else if (!role || !roles.includes(role)) {
            throw new Error('Favor informar o permissão corretamente')
        }

        const hashpass = await bcrypt.hash(password, salt)
        return modelUser.create( 
            { organizationId, name, email, password: hashpass, role } , 
            { transaction }
        )

    }
    async Update(organizationId, id, name, email, password, role, transaction) {
        const oldUser = await this.FindById(organizationId, id, transaction)
        if (!oldUser) {
            throw new Error('Usuário não Encontrada')
        }
        if (role && !roles.includes(role)) {
            throw new Error('Favor informar o permissão corretamente')
        }

        if (role && !oldUser.role === "admin") {
            oldUser.role = role
        }

        oldUser.name = name || oldUser.name
        oldUser.email = email || oldUser.email
        oldUser.password = password ? await bcrypt.hash(password, salt) : oldUser.password

        await oldUser.save({transaction})

        return oldUser
    }
    async Delete(organizationId, id, transaction) {
        const oldUser = await this.FindById(organizationId, id, transaction)

        if (!oldUser) {
            throw new Error('Usuário não Encontrada')
        }
        oldUser.destroy({transaction})
    }

    //async Login()
    //async Verify()

}
module.exports = new ServiceUser()