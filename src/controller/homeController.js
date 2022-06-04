
// import connection from '../config/connectDB.js';
import pool from '../config/connectDB.js';
import multer from 'multer';
import path from 'path';
// console.log('check');

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
    //console.log('check db');
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    // console.log('>>>check row:', rows);
    return res.render('../views/index.ejs', { dataUsers: rows, test: 'String test' });
    //});
}
let getDetailPage = async (req, res) => {
    let id = req.params.id;
    let users = await pool.execute(`Select * from users where id = ? `, [id]);
    //console.log('check req params', id, users);
    //console.log('check req params:', req.params);

    return res.send(JSON.stringify(users[0]));
}
let createNewUser = async (req, res) => {
    console.log('check req:', req.body);
    // await pool.execute('INSERT INTO table_name (column1, column2, column3, ...)
    // VALUES (value1, value2, value3, ...);
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users(firstName,lastName,email,address) values(?,?,?,?)', [firstName, lastName, email, address]);
    return res.redirect('/');
}
let deleteUser = async (req, res) => {
    let id = req.body.id;
    // DELETE FROM table_name WHERE condition;
    await pool.execute('delete from users where id = ?', [id]);
    return res.redirect('/');
}
let getEditPage = async (req, res) => {
    // return res.send(`hello edit page user ${req.params.id}`);

    let id = req.params.id;
    let [user] = await pool.execute('Select * from users where id = ?', [id]);//await will return [data, field] = > [user] or user[0]
    return res.render('updateUser.ejs', { dataUser: user[0] });// user is array => use first element is object
};

let postUpdateUser = async (req, res) => {
    //     UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address =? where id = ?',
        [firstName, lastName, email, address, id]);
    //console.log('check request', req.body);
    return res.redirect('/');
    //can use express validate npm to validate data
}

let uploadFilePage = async (req, res) => {
    return res.render('uploadFile.ejs');
};

//upload file with multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    fileName: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + Path2D.extname(file.originalname));
    }
});
const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let handleUploadFile = async (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('profile_pic');

    upload(req, res, function (err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
    });
}


let getMethod = {
    getHomepage: getHomepage,
    getDetailPage: getDetailPage,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    getEditPage: getEditPage,
    postUpdateUser: postUpdateUser,
    uploadFilePage: uploadFilePage,
    handleUploadFile: handleUploadFile,
}; //because export default can export only one function
export default getMethod;
// module.exports = {
//     getHomepage, getDetailPage, createNewUser, deleteUser, deleteUser, getEditPage,
//     postUpdateUser, uploadFilePage, handleUploadFile
// }



