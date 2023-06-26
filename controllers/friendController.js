// const { FriendId } = require('mongoose').Types;
const { Friend, User } = require('../models');

module.exports = {
  async getFriends(req, res) {
    try {
      const friends = await Friend.find();
      res.json(friends);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleFriend(req, res) {
    try {
      const friend = await Friend.findOne({ _id: req.params.friendId })
        .select('-__v');

      if (!friend) {
        return res.status(404).json({ message: 'No friend with that ID' });
      }

      res.json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createFriend(req, res) {
    try {
      const friend = await Friend.create(req.body);
      res.json(friend);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deleteFriend(req, res) {
    try {
      const friend = await Friend.findOneAndDelete({ _id: req.params.friendId });

      if (!friend) {
        return res.status(404).json({ message: 'No friend with that ID' });
      }

      await User.deleteMany({ _id: { $in: friend.users } });
      res.json({ message: 'Friend deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateFriend(req, res) {
    try {
      const friend = await Friend.findOneAndUpdate(
        { _id: req.params.friendId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!course) {
        return res.status(404).json({ message: 'No friend with this id!' });
      }

      res.json(course);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
