'use strict';

class Model {
  constructor(schema){
    this.schema = schema;
  }
  async create(record) {
    console.log('record', record);
    let createNew = new this.schema(record);
    console.log('createNew', createNew);
    return createNew.save();
  }

  async read(_id){
    console.log('id', _id)
    try{
    let record = await this.schema.findById({_id});
    console.log('record', record)
    return record;
    }catch (e){
      console.error('error on read', e)
    }
  }

  async readByQuery(qurey){
    let results = await this.schema.find(qurey);
    
    return results;
  }
  async update(){
    
  }
  
  async delete(){}

}
module.exports = Model;

