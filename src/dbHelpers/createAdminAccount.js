/* eslint-disable import/prefer-default-export */
import { sequelize, User } from '../db/models';

export const createAdminAccount = async (adminData) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const newAdmin = await User.create(adminData, { transaction: t });

      return newAdmin;
    });
    return result;
  } catch (error) {
    console.log(error.message, 'error');
    const err = {};
    err.message = 'Admin Account was not created successfully';
    return err;
  }
};
