require("dotenv").config();
const User = require("../model/userModel");

let message, status;

const register = async (ctx) => {
  try {
    const user = ctx.request.body;
    const { name, email, password, role } = user;
    const newUser = new User({
      name,
      email,
      password,
      role,
    });
    await newUser.save();
    message = "Registartion Success!";
    status = 200;
  } catch (error) {
    console.log(error);
    message = error;
    status = 500;
  }
  ctx.body = message;
  ctx.status = status;
};

const login = async (ctx) => {
  try {
    const { email, password } = ctx.request.body;
    const user = await User.findOne({
      $and: [{ email: { $eq: email } }, { password: { $eq: password } }],
    });
    if (!user) {
      ctx.body = "User not fount";
      ctx.status = 400;
    } else {
        ctx.body = user;
        ctx.status=200;
    }
  } catch (error) {
    message = error.message;
    status = 500;
  }
};

const getAllUserDetails = async (ctx) => {
  try {
    const users = await User.find();
    message = users;
    status = 200;
  } catch (error) {
    message = error.message;
    status = 500;
  }
  ctx.body = message;
  ctx.status = status;
};




// const getMyDetails = async (ctx) => {
//   try {
//     const uid = await ctx.request.user.id;

//     const user = await User.findById(uid);
//     status = 200;
//     message = user;
//   } catch (error) {
//     message = error.message;
//     status = 500;
//   }
//   ctx.body = message;
//   ctx.status = status;
// };

// const getAllUserDetails = async (ctx) => {
//   try {
//     const users = await User.find();
//     message = users;
//     status = 200;
//   } catch (error) {
//     message = error.message;
//     status = 500;
//   }
//   ctx.body = message;
//   ctx.status = status;
// };

// const deleteMyAccount = async (ctx) => {
//   try {
//     await User.findByIdAndDelete(ctx.request.user.id);
//     message = "Delete Successfull";
//     status = 200;
//   } catch (error) {
//     message = error.message;
//     status = 500;
//   }
//   ctx.body = message;
//   ctx.status = status;
// };

// const deleteUserAccount = async (ctx) => {
//   try {
//     const uid = ctx.request.params.uid;
//     await User.findByIdAndDelete(uid);
//     message = "Delete Successfull";
//     status = 200;
//   } catch (error) {
//     message = error.message;
//     status = 500;
//   }
//   ctx.body = message;
//   ctx.status = status;
// };

// const updateUserAccount = async (ctx) => {
//   try {
//     const uid = ctx.request.params.uid;
//     const { role } = ctx.request.body;
//     await User.findByIdAndUpdate(uid, { role: role });
//     message = "Update Successfull";
//     status = 200;
//   } catch (error) {
//     message = error.message;
//     status = 500;
//   }
//   ctx.body = message;
//   ctx.status = status;
// };

module.exports = {
  register,
  login,
  getAllUserDetails,
//   getMyDetails,
//   getAllUserDetails,
//   deleteMyAccount,
//   deleteUserAccount,
//   updateUserAccount,
};
