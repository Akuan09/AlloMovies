const db = require('../services/database.js');

// exports.getAll = function(callback){
//     db.query('SELECT * FROM `movies_categories`',callback);
// }

exports.getAll = async function(){
    const [rows] = await db.promise().query('SELECT * FROM `movies_categories`');
    return rows;
}

// exports.get = function(callback,id){
//     db.query('SELECT * FROM `movies_categories` WHERE id_movie = ' + id,callback);
// }

exports.get = async function(id){
    const [rows] = await db.promise().query('SELECT c.name_category FROM `movies_categories` mc JOIN categories c ON mc.id_category=c.id_category WHERE id_movie = ' + id);
    return rows;
}

// exports.put = function(callback,id,body){
//     db.query(
//         `UPDATE movies_categories \
//         SET id_movie = '${body.id_movie}', \
//         id_category = '${body.id_category}' \
//         WHERE id_movie_category = ${id}`,
//         callback
//     );
// }

exports.put = async function(id,body){
    const [rows] = await db.promise().query(
        `UPDATE movies_categories \
        SET id_movie = '${body.id_movie}', \
        id_category = '${body.id_category}' \
        WHERE id_movie_category = ${id}`);
    return rows;
}

// exports.delete = function(callback,id){
//     db.query('DELETE FROM `movies_categories` WHERE id_movie_category = ' + id,callback);
// }

exports.delete = async function(id){
    const [rows] = await db.promise().query('DELETE FROM `movies_categories` WHERE id_movie_category = ' + id);
    return rows;
}

// exports.post = function(callback,body){
//     db.query(
//         `INSERT INTO movies_categories (id_movie,id_category) \
//         VALUES ('${body.id_movie}','${body.id_category}')`,
//         callback
//       );
// }

exports.post = async function(body){
    const [rows] = await db.promise().query(
        `INSERT INTO movies_categories (id_movie,id_category) \
        VALUES ('${body.id_movie}','${body.id_category}')`
    );
    return rows;
}

db.connect(function(err) {console.log( err ? err : "Connecté à la base de données MySQL!"); });