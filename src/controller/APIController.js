import pool from '../config/connectDB.js';

let getAllUsersAPI = async (req, res) => {
    //http status: 200->sign: ok 
    //format: json*/xml
    //json: return object
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.status(200).json({
        message: 'ok',
        data: rows,
    });
};
//below: create, delete, update method:  code is copy from homecontroller
let createNewUserAPI = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    //validate
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params',
        });
    };
    await pool.execute('insert into users(firstName,lastName,email,address) values(?,?,?,?)', [firstName, lastName, email, address]);

    return res.status(200).json({
        message: '>>create ok',
    });
};
let updateUserAPI = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing required params',
        });
    };

    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address =? where id = ?', [firstName, lastName, email, address, id]);
    return res.status(200).json({
        message: '>>>update ok ',
    });

};
let deleteUserAPI = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            message: 'missing required params',
        });
    };
    await pool.execute('delete from users where id = ?', [id]);
    return res.status(200).json({
        message: '>>>delete ok ',
    });
};
let APIMethod = {
    getAllUsersAPI: getAllUsersAPI,
    createNewUserAPI: createNewUserAPI,
    updateUserAPI: updateUserAPI,
    deleteUserAPI: deleteUserAPI,

};
export default APIMethod;