
// import connection from '../config/connectDB.js';
import pool from '../config/connectDB.js';

console.log('check');

let getHomepage = async (req, res) => {
    // old method
    //logic(connect data,..)

    // let data = [];

    // connection.query(
    //     'SELECT * FROM `users` ',
    //     function (err, results, fields) {
    //         console.log('>>>check sql');
    //         console.log(results); // results contains rows returned by server
    //         // data = results.map((row) => { return row });

    //         results.map((row) => {
    //             data.push({
    //                 id: row.id,
    //                 firstName: row.firstName,
    //                 lastName: row.lastName,
    //                 email: row.email,
    //                 address: row.address,
    //             })
    //         })
    //         //return res.render('../views/index.ejs', { dataUsers: data, test: 'String test' });
    //     });
    console.log('check db');
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    // console.log('>>>check row:', rows);
    return res.render('../views/index.ejs', { dataUsers: rows, test: 'String test' });
    //});
}
let getDetailPage = async (req, res) => {
    let userId = req.params.userId;
    let users = await pool.execute(`Select * from users where id = ? `, [userId]);
    console.log('check req params', userId, users);
    console.log('check req params:', req.params);

    return res.send(JSON.stringify(users[0]));
}
let getMethod = {
    getHomepage: getHomepage,
    getDetailPage: getDetailPage,
}; //because export default can export only one function
export default getMethod;


