const mongoose = require('mongoose');

const datasSchema = mongoose.Schema({
    layer: { type: String, required: true, unique: true },
    element: { type: String, required: true },
    content: { type: String, required: true }
});

module.exports = mongoose.model('Data', datasSchema);