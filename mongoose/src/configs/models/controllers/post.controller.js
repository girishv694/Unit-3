const express = require('express');
const router = express.Router();

const Post = require('../post.model');




router.post('', async(req,res)=>{

    const user = await Post.create(req.body)

    return res.status(201).send({user});
})


router.get('', async(req,res)=>{

    const allusers = await Post.find().populate('author').populate('tags').lean().exec();

    return res.status(200).send({allusers});
});


router.get('/:id', async(req,res)=>{

    const perticular = await Post.findById(req.params.id).populate('author').lean().exec()

    return res.status(200).send({perticular});
})

router.patch('/:id',async(req,res)=>{

    const userh = await Post.findByIdAndUpdate(req.params.id,req.body ,{new:true}).lean().exec();
    return res.status(201).send({userh});
});


router.delete('/:id', async(req,res)=>{

    const user = await Post.findByIdAndDelete(req.params.id)
    return res.send({user});
})

module.exports = router;
