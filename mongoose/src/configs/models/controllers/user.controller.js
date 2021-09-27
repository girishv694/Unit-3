const express = require('express');
const router = express.Router();

const User =  require('../user.model');






router.post('', async(req,res)=>{

    const user = await User.create(req.body)

    return res.status(201).send({user});
})


router.get('/all', async(req,res)=>{

    const allusers = await User.find().lean().exec();

    return res.status(200).send({allusers});
});


router.get('/:id', async(req,res)=>{

    const perticular = await User.findById(req.params.id).lean().exec()

    return res.status(200).send({perticular});
})

router.patch('/:id',async(req,res)=>{

    const userh = User.findByIdAndUpdate(req.params.id,req.body ,{new:true}).lean().exec();
    return res.status(201).send({userh});
});


router.delete('/delete/:id', async(req,res)=>{

    const user = await User.findByIdAndDelete(req.params.id)
    return res.send({user});
});

module.exports = router;
