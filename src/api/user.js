class ApiUser {

    async FindById(req, res){
        try {
            const organizationId = 1
            const { id } = req.params
            const user = { id } // service.findById(UserId)
            res.status(200).send({user})  
        } catch (error) {
            res.status(500).send({msg: error.message})              
        }
    }
    async FindAll(req, res){
        try {
            const organizationId = 1
            const users = {} // service.findAll()
            res.status(200).send({users})  
        } catch (error) {
            res.status(500).send({msg: error.message})              
        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const { name, email, password, role } = req.body
            const user = { } // service.Create(name, email, password, role, organizationId)   
            res.status(200).send({user})             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
    async Update(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const { name, email, password, role } = req.body
            const user = { } // service.Update(id, name, email, password, role, organizationId)   
            res.status(200).send({user})             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
    async Delete(req, res){
        try {
            const organizationId = 1
            const { id } = req.params
            const user = { } // service.Delete(id)   
            res.status(204).send()             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
}

module.exports = new ApiUser()
