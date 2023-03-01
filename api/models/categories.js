const db = require('../services/database.js');

// exports.getAll = function(callback){
//     db.query('SELECT * FROM `categories`',callback);
// }

exports.getAll = async function(){
    const [rows] = await db.promise().query('SELECT * FROM `categories`');
    return rows;
}

// exports.get = function(callback,id){
//     db.query('SELECT * FROM `categories` WHERE id_category = ' + id,callback);
// }

exports.get = async function(id){
    const [rows] = await db.promise().query('SELECT * FROM `categories` WHERE id_category = ' + id);
    return rows;
}

// exports.put = function(callback,id,body){
//     db.query(
//         `UPDATE categories \
//         SET name_category = '${body.name_category}' \
//         WHERE id_category = ${id}`,
//         callback
//     );
// }

exports.put = async function(id,body){
    const [rows] = await db.promise().query(
    `UPDATE categories \
    SET name_category = '${body.name_category}' \
    WHERE id_category = ${id}`);
    return rows;
}

// exports.delete = function(callback,id){
//     db.query('DELETE FROM `categories` WHERE id_category = ' + id,callback);
// }

exports.delete = async function(id){
    const [rows] = await db.promise().query('DELETE FROM `categories` WHERE id_category = ' + id);
    return rows;
}

// exports.post = function(callback,body){
//     db.query(
//         `INSERT INTO categories (name_category) \
//         VALUES ('${body.name_category}')`,
//         callback
//     );
// }

exports.post = async function(body){
    const [rows] = await db.promise().query(
        `INSERT INTO categories (name_category) \
        VALUES ('${body.name_category}')`
    );
    return rows;
}

db.connect(function(err) {console.log( err ? err : "Connecté à la base de données MySQL!"); });
