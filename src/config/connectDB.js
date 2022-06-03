
import mysql from 'mysql2/promise';

// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodejsbasic',
// });
//console.log("creating connection pool...");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
})


// export default connection;
export default pool;

