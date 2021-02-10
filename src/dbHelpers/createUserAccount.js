/* eslint-disable import/prefer-default-export */
import { sequelize, User } from '../db/models';

export const createUserAccount = async (userData) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const newUser = await User.create(userData, { transaction: t });

      return newUser;
    });
    return result;
  } catch (error) {
    console.log(error.message, 'error');
    const err = {};
    err.message = 'Account was not created successfully';
    return err;
  }
};
