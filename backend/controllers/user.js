const bcrypt = require('bcrypt');
const BGAdmin = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new BGAdmin({
                username: req.body.username,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'success' }))
                .catch(err => res.status(400).json({ err }));
        })
        .catch(err => res.status(500).json({ err }));
};

exports.login = (req, res, next) => {
    BGAdmin.findOne({ username: req.body.username })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'The username is incorrect' })
            }
            bcrypt.compare(req.body.password, user.password)
                .then((valide) => {
                    if (!valide) {
                        return res.status(401).json({ message: 'The pair username/password is incorrect' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'ZTB34}j77c%-Yzw',
                            { expiresIn: '24h' }
                        ),
                    })
                })
                .catch((err) => res.status(500).json({ err }));
        })
        .catch((err) => res.status(500).json({ err }));
};


