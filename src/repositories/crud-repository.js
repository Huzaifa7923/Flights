class CrudRepostory{
    constructor(model){
        this.model=model
    }


    async create(data){
        const resp = await this.model.create(data);
        return resp;
    }

    async getAll(){
        const resp = await this.model.findAll();
        return resp;
    }

    async get(data){
        const resp = await this.model.findByPk(data);  
        return resp;
    }


    async destroy(data){
            const resp = await this.model.destroy({
            where:{
                id:data
            }
        });
        return resp;
    }



    async update(id,data){
        const resp = await this.model.update(data,{
            where:{
                id
            }
        });

        return resp;
    }
}

module.exports=CrudRepostory