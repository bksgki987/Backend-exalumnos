/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  generation: {
    type: Number,
    required: true,
    trim: true,
  },
  filenumber: {
    type: Number,
    required: true,
    trim: true,
  },
  ocupation: {
    type: String,
    required: true,
    trim: true,
  },
  companyname: {
    type: String,
    required: true,
    trim: true,
  },
  currentposition: {
    type: String,
    required: true,
    trim: true,
  },
  telephon: {
    type: Number,
    required: true,
    trim: true,
  },
  placewherelive: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

userSchema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  return bcrypt.genSalt(SALT_WORK_FACTOR, (errSalt, salt) => {
    if (errSalt) return next(errSalt);

    // hash the password along with our new salt
    // eslint-disable-next-line prefer-arrow-callback
    return bcrypt.hash(user.password, salt, function (errHash, hash) {
      if (errHash) return next(errHash);

      // override the cleartext password with the hashed one
      user.password = hash;
      return next();
    });
  });
});

const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;
