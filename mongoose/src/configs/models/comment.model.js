const mongoose = require('mongoose');


const CommentSchema = mongoose.Schema({

    body:{type:String,required:true},
    post:{type:mongoose.Schema.Types.ObjectId, ref:'post', required:true}

},{
    versionKey:false,
    timestamps:true
});


// connecting comment collection to db
const Comment = mongoose.model('comment',CommentSchema);//comment collection is created

module.exports = Comment;