const { User } = require('../models');

module.exports = {
  create: (body) => new User(body).save(),
  findAll: () => User.find(),
  findOneByEmail: (email) => User.findOne({ email }),
  findOneById: (id) => User.findById(id),
  updateOne: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  deliteOneById: (id) => User.findByIdAndDelete(id),
};
