class ApiProduct {

    async FindById(req, res){
        try {
            const { id } = req.params
            const organizationId = 1
            const product = { id } // service.findById(productId)
            res.status(200).send({product})  
        } catch (error) {
            res.status(500).send({msg: error.message})              
        }
    }
    async FindAll(req, res){
        try {
            const organizationId = 1
            const products = [ { organizationId } ] // service.findAll()
            res.status(200).send( { products } )  
        } catch (error) {
            res.status(500).send({msg: error.message})              
        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const {name, description } = req.body
            const product = { } // service.Create(name, email, password, role, organizationId)   
            res.status(200).send({product})             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
    async Update(req, res) {
        try {
            const organizationId = 1
            const {id} = req.params
            const {name, description} = req.body
            const product = { } // service.Update(id, name, email, password, role, organizationId)   
            res.status(200).send({product})             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
    async Delete(req, res){
        try {
            const organizationId = 1
            const { id } = req.params
            const product = {  } // service.Delete(id)   
            res.status(204).send()             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
}

module.exports = new ApiProduct()
