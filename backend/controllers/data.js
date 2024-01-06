const Data = require('../models/data');
// const fs = require('fs');
// const { catchError } = require('rxjs');

exports.getAllDatas = (req, res, next) => {
    Data.find()
        .then((data) => {
            res.status(200).json(data)
        })
        .then((data) => {
            // console.log(data + "ok");
        })
        .catch(err => res.status(400).json({ err }));
};

exports.getOneData = (req, res, next) => {
    // console.log({ layer: req.params.layer, element: req.params.element });
    Data.findOne({ layer: req.params.layer, element: req.params.element })
        .then((response) => {
            // console.log(data);
            res.status(200).json(response)
        })
        .then((data) => {
            // console.log(data);
        })
        .catch(err => res.status(404).json({ err }));
};

exports.postOneData = (req, res, next) => {
    const data = new Data({
        layer: req.body.layer,
        element: req.body.element,
        content: req.body.content,
        content1: req.body.content1,
        content2: req.body.content2,
    })
    // console.log(data)
    data.save()
        .then(() => res.status(201).json({ message: "New object created successfully" }))
        .catch(err => {
            console.log(err)
            res.status(400).json({ err });
        })
};

exports.updateOneData = (req, res, next) => {
    const content = req.body.content
    const content1 = req.body.content1
    const content2 = req.body.content2
    Data.findOne({ layer: req.body.layer, element: req.body.element })
        .then(() => {
            Data.updateOne({ layer: req.body.layer, element: req.body.element }, { content, content1, content2, layer: req.body.layer, element: req.body.element })
                .then(() => res.status(200).json({ message: 'Data updated successfully' }))
                .catch(err => res.status(401).json(err))
        })
        .catch(err => res.status(400).json({ err }));
};

exports.deleteOneData = (req, res, next) => {
    console.log(req.body.layer)
    Data.findOne({ layer: req.body.layer, element: req.body.element })
        .then(() => {
            Data.deleteOne({ layer: req.body.layer, element: req.body.element })
                .then(() => res.status(200).json({ message: 'Object deleted successfully' }))
                .catch(err => res.status(400).json({ err }));
        })
        .catch(err => res.status(500).json({ err }))
};