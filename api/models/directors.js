const db = require('../services/database.js');

// exports.getAll = function(callback){
//     db.query('SELECT * FROM `directors`',callback);
// }

exports.getAll = async function(){
    const [rows] = await db.promise().query('SELECT * FROM `directors`');
    return rows;
}

// exports.get = function(callback,id){
//     db.query('SELECT * FROM `directors` WHERE id_director = ' + id ,callback);
// }

exports.get = async function(id){
    const [rows] = await db.promise().query('SELECT * FROM `directors` WHERE id_director = ' + id);
    return rows;
}

// exports.put = function(callback,id,body){
//     db.query(
//         `UPDATE directors \
//         SET name_director = '${body.name_director}', \
//         birth_director = '${body.birth_director}', \
//         pic_director = '${body.pic_director}' \
//         WHERE id_director = ${id}`,
//         callback
//     );
// }

exports.put = async function(id,body){
    const [rows] = await db.promise().query(
        `UPDATE directors \
        SET name_director = '${body.name_director}', \
        birth_director = '${body.birth_director}', \
        pic_director = '${body.pic_director}'\
        WHERE id_director = ${id}`);
    return rows;
}

// exports.delete = function(callback){
//     db.query('DELETE FROM `directors` WHERE id_director = ' + id,callback);
// }

exports.delete = async function(id){
    const [rows] = await db.promise().query('DELETE FROM `directors` WHERE id_director = ' + id);
    return rows;
}

// exports.post = function(callback,body){
//     db.query(
//         `INSERT INTO directors (name_director,birth_director,pic_director) \
//         VALUES ('${body.name_director}','${body.birth_director}','${body.pic_director}')`,
//         callback
//     );
// }

exports.post = async function(body){
    const [rows] = await db.promise().query(
        `INSERT INTO directors (name_director,birth_director,pic_director) \
        VALUES ('${body.name_director}','${body.birth_director}','${body.pic_director}')`
    );
    return rows;
}

db.connect(function(err) {console.log( err ? err : "Connecté à la base de données MySQL!"); });