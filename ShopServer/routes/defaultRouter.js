const express = require('express');
const router = express.Router();

const defaultController = require('../controllers/defaultController');
const userloginController = require('../controllers/userloginController');
const registerController = require('../controllers/registerController');
const picController = require('../controllers/picController');
const stockController = require('../controllers/stockController');

//user login
router.post('/mysession', async function (req, res) {
    res.send({sessionid:req.sessionID});  
});

router.post('/login', async function(req,res){
    await userloginController.login(req.body,function(result){
        res.send(result);
    });
});

router.post('/checkType', async function(req,res){
    await userloginController.checkType(req.body,function(result){
        res.send(result);
    });
});

router.post('/insertRegister', async function(req,res){
    await registerController.insertRegister(req.body,function(result){
        res.send(result);
    })
})

router.get('/getPicture', async function(req,res){
    await picController.pic(req.body,function(result){
        res.send(result);
    })
})

router.post('/updateSession', async function(req,res){
    await defaultController.updateSession(req.body,function(result){
        res.send(result);
    })
})

router.post('/checkSession', async function(req,res){
    await defaultController.checksession(req.body,function(result){
        res.send(result);
    })
})

router.get('/stock', async function(req,res){
    await stockController.stock(req.body,function(result){
        res.send(result);
    })
})

module.exports = router;