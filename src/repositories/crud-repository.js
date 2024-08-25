class CrudRepostory{
    constructor(model){
        this.model=model
    }


    async create(data){
        try{
        const resp = await this.model.create(data);
        return resp;
        }catch(err){
            // console.log(err);
            console.log('inside crud error')
            throw new Error(err);
        }
    }

    async destroy(data){
        try{
        const resp = await this.model.destroy({
            where:{
                id:data
            }
        });
        return resp;
        }catch(err){
            throw new Error(err);
        }
    }

    async get(data){
        try{
        const resp = await this.model.findByPk(data);
        
        return resp;
        }catch(err){
            throw new Error(err);
        }
    }

    async getAll(){
        try{
        const resp = await this.model.findAll();

        return resp;
        }catch(err){
            throw new Error(err);
        }
    }

    async update(id,data){
        try{
        const resp = await this.model.update(data,{
            where:{
                id
            }
        });

        return resp;
        }catch(err){
            throw new Error(err);
        }
    }
}

module.exports=CrudRepostory