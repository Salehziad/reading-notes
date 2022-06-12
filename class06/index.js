'use strict';
const express = require('express');
const {
    user
} = require('pg/lib/defaults');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');
// app.listen(()=>{
//     console.log(`server is lestining on port ${port}`);
// });

app.use(express.json())

const users = [{
    "name": "name"
}]
app.get('/users', (req, res) => {
    res.json(users);
});
app.post('/users', async (req, res) => {
    try {
        // const salt=await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
            name: req.body.name,
            password: hashedPassword
        }
        users.push(user);
        res.status(201).send('user added');
    } catch {
        res.status(500).send('error');
    }
});
app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
      return  res.status(400).send(`can't find user ${req.body.name}`)
    }
    try {
        if(await bcrypt.compare(req.body.password,user.password)){
            res.send(`user ${req.body.name} logged in`);
        }
        else{
            res.send('not allowed wrong password')
        }
    } catch {
        res.status(500).send('error');
    }
});
app.listen(port);