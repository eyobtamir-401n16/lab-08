'use strict';

class Model {
  constructor(schema){
    this.schema = schema;
  }
  async create() {}

  async red(_id){
    let record = await this.schema.findOne({_id});
    return record;
  }

  async readByQuery(qurey){
    let results = await this.schema.find(qurey);
    return results;
  }
  async update(){}
  
  async delete(){}

}
module.exports = Model;

