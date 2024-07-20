const UserModel = require('../models/user.model');
const moveFile = require('../utils/move-file');

const usersController = {};

usersController.getUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.send(allUsers);
  } catch (err) {
    res.status(404).send({ message: 'Users not found' });
  }
};

usersController.editUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    if (!user) return res.status(404).send({ message: 'User not found' });

    await UserModel.updateOne(
      { _id: id },
      {
        $set: {
          ...req.body
        }
      }
    );

    const allUsers = await UserModel.find();
    res.status(202).send(allUsers);
  } catch (err) {}
};

usersController.editImage = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ message: 'No files were uploaded' });
  }

  const { id } = req.params;
  const user = await UserModel.findById(id);

  if (!user) return res.status(404).json({ message: 'User not found' });

  const fileUrl = await moveFile(req, user.username);

  await UserModel.updateOne(
    { _id: id },
    {
      $set: {
        img: fileUrl
      }
    }
  );
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    if (!user) return res.status(404).send({ message: 'User not found' });

    await UserModel.deleteOne({ _id: id });

    const allUsers = await UserModel.find();
    res.status(202).send(allUsers);
  } catch {}
};

module.exports = usersController;
