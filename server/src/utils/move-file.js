const path = require('path');
const { v4 } = require('uuid');

const moveFile = async (req, username) => {
  const file = req.files.image;
  const extension = path.extname(file.name);
  const fileName = username + '-' + v4() + extension;

  console.log(fileName);

  const uploadPath = path.resolve(__dirname, '../uploads', fileName);

  return new Promise((resolve, reject) => {
    file.mv(uploadPath, err => {
      if (err) reject(err);

      const fileUrl = `${req.protocol}://${req.get(
        'host'
      )}/uploads/${fileName}`;

      resolve(fileUrl);
    });
  });
};

module.exports = moveFile;
