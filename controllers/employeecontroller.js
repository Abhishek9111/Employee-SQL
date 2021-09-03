const express = require('express');
const router  = express.Router();
const db = require('../models/connection')

router.get('/addEmp',(req,res)=>{
    res.render('add')
})

router.post('/updateEmp',(req,res)=>{
    //console.log(req.body)
    let sql = `UPDATE users SET name='${req.body.name}',email='${req.body.email}',password='${req.body.password}',phone='${req.body.phone}',city='${req.body.city}' WHERE id=${req.body.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err;
        //console.log(result)
        res.redirect('/showallemp')
    })
})
router.post('/employee',(req,res)=>{
    //console.log(req.body)
    const user = {name:req.body.name,email:req.body.email,password:req.body.password,phone:req.body.phone,city:req.body.city}
    let sql = 'INSERT INTO users SET ?'
    db.query(sql,user,(err,result)=>{
        if(err) throw err;
        //console.log(result)
        res.redirect('/showallemp')
    })
})

router.get('/showallemp',(req,res)=>{
    let sql = 'SELECT * FROM users'
    db.query(sql,(err,result)=>{
        if(err) throw err;
        //res.send(result)
        //console.log(result)
        res.render('show',{list:result})
    })
})

router.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    let sql = `DELETE FROM users where id=${id}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.redirect('/showallemp')
    })
})

router.get('/update/:id',(req,res)=>{
    let sql = ` SELECT * FROM users where id = ${req.params.id}`;
    db.query(sql,(err,result)=>{
    //console.log(result[0])
    if(err) throw err;
    res.render('updateview',{data:result[0]})
    })

})



//router.get('/update/:id',(req,res)=>{})
module.exports = router;