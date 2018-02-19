const express = require('express');
const book = express.Router();
const mongoose = require('mongoose');
const {Book} = require('../models/Book');

//GET ALL BOOKS
book.get('/', (req, res, next) => {
   Book.find().then((books) => {
       res.json(books);
   }).catch((err) => {return next(err)});
});

//GET A BOOK BY ID
book.get('/:id', (req, res, next) => {
   var id = req.params.id;
   
    Book.findById(id).then((aBook) => {
        res.json(aBook);
    }).catch((e) => {return next(err)});
});

//SAVE A NEW BOOK
book.post('/', (req, res, next) => {
    Book.create(req.body).then((aBook) => {
        res.json(aBook);
    }).catch((e) =>{return next(err)});
});

/* UPDATE BOOK */
book.put('/:id', (req, res, next) => {
    var id = req.params.id;
    var body = req.body;

    Book.findByIdAndUpdate(id, {$set: body}, {new: true}).then((err, aBook) => {
      res.json(aBook);
    }).catch((e) =>{return next(err)});
  });
  
  /* DELETE BOOK */
  book.delete('/:id',(req, res, next) => {
    var id = req.params.id;
    
    Book.findByIdAndRemove().then((err, aBook) => {
      res.json(aBook);
    }).catch((e) =>{return next(err)});
  });


module.exports = {book};