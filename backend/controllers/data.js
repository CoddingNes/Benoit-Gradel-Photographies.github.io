const Data = require('../models/data');
// const fs = require('fs');
// const { catchError } = require('rxjs');

exports.getAllDatas = (req, res, next) => {
    Data.find()
        .then((datas) => {
            res.status(200).json(datas)
        })
        .catch(err => res.status(400).json({ err }));
};

exports.getOneData = (req, res, next) => {
    Data.findOne({ _id: req.params.id })
        .then((data) => res.status(200).json(data))
        .catch(err => res.status(404).json({ err }));
};

exports.postOneData = (req, res, next) => {
    const data = new Data({
        layer: req.body.layer,
        element: req.body.element,
        content: req.body.content,
    })
    data.save()
        .then(() => res.status(201).json({ message: "New object created successfully" }))
        .catch(err => {
            console.log(err)
            res.status(400).json({ err });
        })
};
