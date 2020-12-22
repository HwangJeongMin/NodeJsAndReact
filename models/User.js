const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 5;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", (next) => {
  let user = userSchema.tree;
  // if (user.isModified(password)) {
  // 비밀번호를 암호화 시킨다.
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err);

    // console.log(user.password, salt);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });

  // bcrypt.genSalt(saltRounds, function (err, salt) {
  //   bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
  //     // Store hash in your password DB.
  //   });
  // });
  // }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
