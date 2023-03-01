const model = require("../models/directors.js");;

// exports.getAll = function(req,res){
//     model.getAll(function(err,results){
//         if (err){
//             res.status(500).send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }

exports.getAll = function(req,res){
    model.getAll()
    .then((rows)=>res.json(rows))
    .catch((err)=>res.status(500).send(err));
}

// exports.get = function(req,res){
//     model.get(function(err, results) {
//         if (err){
//             res.status(500).send(err);
//         }else{
//             res.json(results);
//         }
//     },req.params.year);
// }

exports.get = function(req,res){
    model.get(req.params.id)
    .then((rows)=>res.json(rows))
    .catch((err)=>res.status(500).send(err));
}

// exports.put = function(req,res){
//     model.put(function (err, results) {
//         if (err){
//             res.status(500).send(err);
//         }else{
//             res.json(results);
//         }
//     },req.params.id,req.body);
// }

exports.put = function(req,res){
    model.put(req.params.id,req.body)
    .then((rows)=>res.json(rows))
    .catch((err)=>res.status(500).send(err));
}

// exports.delete = function(req,res){
//     model.delete(function (err, results) {
//         if (err){
//             res.status(500).send(err);
//         }else{
//             res.json(results);
//         }
//     },req.params.id);
// }

exports.delete = function(req,res){
    model.delete(req.params.id)
    .then((rows)=>res.json(rows))
    .catch((err)=>res.status(500).send(err));
}

// exports.post = function(req,res){
//     model.post(function(err, results) {
//         if (err){
//             res.status(500).send(err);
//         }else{
//             res.json(results);
//         }
//     },req.body)
// }

exports.post = function(req,res){
    model.post(req.body)
    .then((rows)=>res.json(rows))
    .catch((err)=>res.status(500).send(err));
}