
import connection from '../config/connectDB.js';
console.log('check');

function getHomepage(req, res) {
    //logic(connect data,..)
    console.log('check db');
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            console.log('>>>check sql');
            console.log(results); // results contains rows returned by server
            // data = results.map((row) => { return row });
            results.map((row) => {
                data.push({
                    id: row.id,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    email: row.email,
                    address: row.address,
                })
            })
            return res.render('../views/index.ejs', { dataUsers: data, test: 'String test' });
        })
    console.log('>>>check data : ', data); // fields contains extra meta data about results, if available


    //});

}


export default getHomepage;


