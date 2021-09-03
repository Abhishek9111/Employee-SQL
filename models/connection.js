const mysql = require('mysql')

//connection of database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'employee',
})
db.connect(err=>{
    if(err) throw err;
    console.log('mysql connected')
})

module.exports = db