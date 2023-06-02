const router = require('express').Router();
const {
  updateUser,
  deleteUser,
  getUsers,
  getSingleUser,
  createUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route("/:userId/friends").post(addFriend);

router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;

