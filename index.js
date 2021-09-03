const express = require('express');
const db = require('./models/connection')
const router = require('./controllers/employeecontroller')
const exphbs =require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server is Running at ${PORT}`));