const uuid = require('uuid');

const Users = require('../../models/users.model');
const { hashPassword } = require('../../utils/crypto');

const getAllUsers = async () => {
  const data = await Users.findAll();
  return data.map((user) => {
    user.password = undefined;
    return user;
  });
};

const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id,
      status: 'active'
    }
  });
  return { ...data, password: undefined };
};

const createUser = async (data) => {
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword(data.password),
    phone: data.phone,
    birthday: data.birthday,
    gender: data.gender,
    role: data.role,
    urlImage: data.urlImage
  });
  return { ...newUser, password: undefined };
};

const updateUser = async (id, data) => {
  const result = await Users.update(data, {
    where: {
      id
    }
  });
  return { ...result, password: undefined };
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id
    }
  });
  return data;
};

const getUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: {
      email,
      status: 'active'
    }
  });
  return data;
};

const adminCreateUser = async (data) => {
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword('root'),
    phone: data.phone,
    birthday: data.birthday,
    gender: data.gender,
    role: data.role,
    urlImage: data.urlImage
  });
  return { ...newUser, password: undefined };
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
  adminCreateUser
};
