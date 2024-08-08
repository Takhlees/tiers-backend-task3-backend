const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'bkxefseccrpye7lamleo-mysql.services.clever-cloud.com',
    user : 'uuc8kfqsavc7oujo',
    password: 'P6vrq1pO4srddUM81a9i',
    database: 'bkxefseccrpye7lamleo',
    port: '3306',
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected');
})

module.exports={connection};