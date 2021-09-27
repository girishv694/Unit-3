const express = require('express');
const mongoose = require('mongoose');
const app = express();


const connect = require('./src/configs/db')

const User = require('./src/configs/models/user.model');

const Post = require('./src/configs/models/post.model');

const Comment = require('./src/configs/models/comment.model');

const Tag = require('./src/configs/models/tags.model');


const Usercontroller = require('./src/configs/models/controllers/user.controller');
const Postcontroller = require('./src/configs/models/controllers/post.controller');
app.use(express.json());
app.use('/users',Usercontroller);
app.use('/post',Postcontroller);












//CRUD for post 





//crud for comments

app.post('/comments', async(req,res)=>{

    const user = await Comment.create(req.body)

    return res.status(201).send({user});
})


app.get('/comments', async(req,res)=>{

    const allcomments = await Comment.find().populate('post').lean().exec();

    return res.status(200).send({allcomments});
});


app.get('/comments/:id', async(req,res)=>{

    const perticular = await Comment.findById(req.params.id).populate('post').lean().exec()

    return res.status(200).send({perticular});
})

app.patch('/comments/:id',async(req,res)=>{

    const userh = await Comment.findByIdAndUpdate(req.params.id,req.body ,{new:true}).lean().exec();
    return res.status(201).send({userh});
});


app.delete('/comments/delete/:id', async(req,res)=>{

    const user = await Comment.findByIdAndDelete(req.params.id)
    return res.send({user});
})


//tags



//CRUD Api for Tag

app.post('/tags', async(req,res)=>{

    const tags = await Tag.create(req.body)

    return res.status(201).send({tags});
})


app.get('/tags', async(req,res)=>{

    const alltags = await Tag.find().lean().exec();

    return res.status(200).send({alltags});
});


app.get('/tags/:id', async(req,res)=>{

    const perticular = await Tag.findById(req.params.id).lean().exec()

    return res.status(200).send({perticular});
})

app.patch('/tags/:id',async(req,res)=>{

    const userh = await Tag.findByIdAndUpdate(req.params.id,req.body ,{new:true}).lean().exec();
    return res.status(201).send({userh});
});


app.delete('/tags/delete/:id', async(req,res)=>{

    const deleteTag = await Tag.findByIdAndDelete(req.params.id)
    return res.send({deleteTag});
})








app.listen(3000, async () =>{
    await connect();

    console.log("Running on server 30000");
})
