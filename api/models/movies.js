const db = require('../services/database.js');

// exports.getAll = function(callback){
//     db.query("SELECT * FROM `movies`",callback);
// }

exports.getAll = async function(){
    const [rows] = await db.promise().query("SELECT * FROM movies");
    return rows;
}

// exports.get = function(callback,year){
//     db.query('SELECT * FROM `movies` WHERE year_movie = ' + year,callback);
// }

exports.get = async function(id){
    const [rows] = await db.promise().query('SELECT * FROM `movies` WHERE id_movie = ' + id);
    return rows;
}

// exports.put = function(callback,id,body){
//     db.query(
//         `UPDATE movies \
//         SET title_movie = '${body.title_movie}', \
//         duration_movie = '${body.duration_movie}', \
//         year_movie = '${body.year_movie}', \
//         synopsis_movie = '${body.synopsis_movie}' \
//         WHERE id_movie = ${id}`,
//         callback
//     );
// }

exports.put = async function(id,body){
    const [rows] = await db.promise().query(
    `UPDATE movies \
    SET title_movie = '${body.title_movie}', \
    duration_movie = '${body.duration_movie}', \
    year_movie = '${body.year_movie}', \
    synopsis_movie = '${body.synopsis_movie}' \
    WHERE id_movie = ${id}`);
    return rows;
}

// exports.delete = function(callback,id){
//     db.query('DELETE FROM `movies` WHERE id_movie = ' + id,callback);
// }

exports.delete = async function(id){
    const [rows] = await db.promise().query('DELETE FROM `movies` WHERE id_movie = ' + id);
    return rows;
}

// exports.post = function(callback,body){
//     db.query(
//         `INSERT INTO movies (title_movie,duration_movie,year_movie,synopsis_movie,director_movie) \
//         VALUES ('${body.title_movie}','${body.duration_movie}','${body.year_movie}','${body.synopsis_movie}','${body.director_movie}')`,
//         callback
//     );
// }

exports.post = async function(body){
    const [rows] = await db.promise().query(
        `INSERT INTO movies (title_movie,duration_movie,year_movie,synopsis_movie,director_movie) \
        VALUES ('${body.title_movie}','${body.duration_movie}','${body.year_movie}','${body.synopsis_movie}','${body.director_movie}')`
    );
    return rows;
}

db.connect(function(err) {console.log( err ? err : "Connecté à la base de données MySQL!"); });
