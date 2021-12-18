const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const Admin = require('./router/Admin')
const user =require('./router/user')
const Dior = require('./router/show')
const orders= require('./router/order')

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:1234@cluster0.uktit.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}

// =================   USER NEED ===============================================================

// Miss Dior API => http://localhost:3001/Dior/collection/61b1ddbbdb2645c13798f3ce

// JOY API => http://localhost:3001/Dior/collection/61b1dc8adb2645c13798f3c4

// J'ADORE API => http://localhost:3001/Dior/collection/61b1df23db2645c13798f3ee

//================ ADMIN NEED ==================================================================

// Admin LOGIN  http://localhost:3001/Admin/login

// Admin ADD collection  http://localhost:3001/Admin/collection

// delet and edit  collection  http://localhost:3001/Admin/collection/:id

// delet and edit  Parfume  http://localhost:3001/Admin/Parfume/:CId/:PId

// Add Parfume  http://localhost:3001/Admin/Parfume/:CId     NOTE : CId is collection ID

// this for the collection ==>  http://localhost:3001/Admin/collection/:id

// Miss Dior API => http://localhost:3001/Admin/collection/61b1ddbbdb2645c13798f3ce

// JOY API => http://localhost:3001/Admin/collection/61b1dc8adb2645c13798f3c4

// J'ADORE API => http://localhost:3001/Admin/collection/61b1df23db2645c13798f3ee

// login user => http://localhost:3001/user/login

// Singup user => http://localhost:3001/user/signup


app.use(cors({origin: 'http://localhost:3000'}))

app.use(express.json());


app.get('/', (req,res)=>{
    res.json({message: "hi marah"})
    // res.send("hi i work in postman too")
})

app.use("/Admin", Admin)
app.use('/user', user)
app.use('/Dior', Dior)
app.use('/orders/',orders)

app.listen(3001, () =>{
    console.log("hi  i worked b");
})

