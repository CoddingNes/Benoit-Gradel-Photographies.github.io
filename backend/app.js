const mongoose = require('mongoose');
const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const dataRoutes = require('./routes/data');


// app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://user1:user1@coddingnes.kkmgzbd.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// app.use('/auth', (req, res) => {
//     res.send({
//         token: token
//     });
// });

// app.use('/auth', (req, res) => {
//     res.send({
//         token: 'test123'
//     });
// });

app.use('/auth', userRoutes);
app.use('/admin', dataRoutes);
// app.use('/images', express.static(path.join(__dirname, '/images')));

module.exports = app;

