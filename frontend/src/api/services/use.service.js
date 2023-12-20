import api from '../api_instance';

// Define all resources
const RESOURCES = {
  LIST_USERS: 'api/v1/users',
  // GET_USER: '/users/:id',
  // CREATE_USER: '/users',
  // UPDATE_USER: '/users/:id',
  // DELETE_USER: '/users/:id',
};

// Services
const listUsers = async () => {
  const { data } = await api.get(RESOURCES.LIST_USERS);
  return data;
};

// const findUserById = async ({ id }) => {
//   const { data } = await api.get(RESOURCES.GET_USER.replace(':id', id));
//   return data;
// };

// const createUser = async ({ name, email }) => {
//   const { data } = await api.post(RESOURCES.CREATE_USER, {
//     name,
//     email,
//   });
//   return data;
// };

// const deleteUser = async ({ id }) => {
//   const { data } = await api.delete(RESOURCES.DELETE_USER.replace(':id', id));
//   return data;
// };

// const updateUser = async ({ id, name, email }) => {
//   const { data } = await api.patch(RESOURCES.UPDATE_USER.replace(':id', id), {
//     name,
//     email,
//   });
//   return data;
// };

export const usersServices = {
  listUsers,
  // findUserById,
  // createUser,
  // updateUser,
  // deleteUser,
};
