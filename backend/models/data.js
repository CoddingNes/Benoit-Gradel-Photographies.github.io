const mongoose = require('mongoose');

const datasSchema = mongoose.Schema({
    layer: { type: String, required: true },
    element: { type: String, required: true },
    content: { type: Array, required: true },
    content1: { type: Array, required: false },
    content2: { type: Array, required: false }
});

module.exports = mongoose.model('Data', datasSchema);