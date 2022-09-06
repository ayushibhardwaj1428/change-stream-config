const mongoose = require("mongoose");
// always use schema in naming convention of schemas

const changeStreamConfigSchema = new mongoose.Schema({
    clientId:{type:String, required:true},
    collections:{type:[String], required:true},
    sendRaw:{type:Boolean, default:false},
    webHookUrl:{type:String, required:true},
    active:{type:Boolean, default:true},
    webHookSecret:{type:String, required:true}
},{timestamps:true});


const ChangeStreamConfig = mongoose.model("changeStreamConfig", changeStreamConfigSchema);

module.exports = ChangeStreamConfig;