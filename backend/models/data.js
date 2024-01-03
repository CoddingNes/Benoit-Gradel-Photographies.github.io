const mongoose = require('mongoose');

const datasSchema = mongoose.Schema({
    layer: { type: String, required: true },
    element: { type: String, required: true },
    content: { type: Array, required: true }
});

module.exports = mongoose.model('Data', datasSchema);