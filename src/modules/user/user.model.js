/* eslint-disable import/prefer-default-export */
import { User } from '../../db/models';

const { Op } = require('sequelize');


export const getUser = async (email) => {
  const foundUser = await User.findOne({ where: { email } });
  if (foundUser) { return foundUser; }
  return null;
};

export const createUser = async (payload) => {
  const newUser = await User.create(payload);
  return newUser;
};

export const getUserById = async (userId) => {
  const foundUser = await User.findOne({ where: { userId } });
  if (foundUser) { return foundUser; }
  return null;
};

export const getUserByEmail = async (email) => {
  const foundUser = await User.findOne({ where: { email } });
  if (foundUser) { return foundUser; }
  return null;
};

export const getUserByUsername = async (username) => {
  const foundUser = await User.findOne({ where: { username } });
  if (foundUser) { return foundUser; }
  return null;
};

export const getUserByUsernameorEmail = async (credential) => {
  const foundUser = await User.findOne({
    where: {
      [Op.or]: [
        { email: credential },
        { username: credential }
      ]
    }
  });
  if (foundUser) { return foundUser; }
  return null;
};
