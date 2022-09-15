const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email not valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
});

userSchema.statics.findUser = async (email, password) => {
  const user = await User.findOne({ email });
  const credInvalidError = {
    status: 400,
    message: "invalid email or password",
  };
  if (!user) {
    throw credInvalidError;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw credInvalidError;
  }

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
