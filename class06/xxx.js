'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');
const base64 = require('js-base64');
const jwt=require('jsonwebtoken')
app.use(express.json());
app.listen(port)
let secret=process.env.ACCES_TOKEN_SECRET;
// console.log(secret);

//// jsonwebtoken
// to generate token secret require('crypto').randomBytes(64).toString('hex')
app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    const user = { name: username,password:password}
   const accecToken= jwt.sign(user,secret);
   res.json({accecToken:accecToken});
});

app.get('/users',authonticate(), (req, res) => {
    res.json(users);
});

function authonticate(req,res,next){
    let header=req.headers.authorization.split(' ');
    console.log({header});
    next();
}









// base64
const name = 'saleh';
const pas = '123456';
const encoded = base64.encode(`${name}:${pas}`);
// console.log(encoded);
// console.log(base64.decode(encoded));

// hash
const pass = '123456'
console.log(pass);
async function crypt(text) {
    let hashed = await bcrypt.hash(text, 10);
    console.log(hashed);
}
crypt(pass)
const users = [{
    "name": "name"
}]
// app.get('/users', (req, res) => {
//     res.json(users);
// });
app.post('/users', async (req, res) => {
    try {
        // const salt=await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
            name: req.body.username,
            password: hashedPassword
        }
        users.push(user);
        res.status(201).send('user added');
    } catch {
        res.status(500).send('error');
    }
});
app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.username === req.body.username)
    if (user == null) {
      return  res.status(400).send(`can't find user ${req.body.username}`)
    }
    try {
        if(await bcrypt.compare(req.body.password,user.password)){
            res.send(`user ${req.body.username} logged in`);
        }
        else{
            res.send('not allowed wrong password')
        }
    } catch {
        res.status(500).send('error');
    }
});