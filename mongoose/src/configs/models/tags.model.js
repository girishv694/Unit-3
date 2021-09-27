const mongoose = require('mongoose');


const TagSchema = new mongoose.Schema({

    name :{type:String,required:true}


},{
    timestamps:true,
    versionKey:false
});

const Tag = mongoose.model('tag',TagSchema);

module.exports = Tag;