const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addUser,
  addThought,
  removeThought,
  userId,
  deleteUser

} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).add(addUser);

router.route('/:userId/thoughts').post(addThought);

router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

router.route('/:userId/thoughts').update(userId);

router.route('/:userId/friends/:friendId').delete(deleteUser);

module.exports = router;
