const { User, Thought } = require('../models');

const userController = {
    // Get all Users
    getUsers(req, res) {
        User.find({})
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Get a single User by id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User with this ID does not exist.' });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },


    // Create a  User
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Update a User
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            {
                $set: req.body,
            },
            {
                runValidators: true,
                new: true,
            }
        )
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User with this ID does not exist.' });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Add a friend
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.UserId }, { $addToSet: { friends: req.params.friendId } }, { new: true })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User with this ID does not exist.' });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Remove a friend
    removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User with this ID does not exist.' });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = userController;