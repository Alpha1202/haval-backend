/* eslint-disable import/prefer-default-export */
import { sequelize, WaitingList } from '../db/models';

export const createWaitingList = async (payload) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const newListEntry = await WaitingList.create(payload, { transaction: t });

      return newListEntry;
    });
    return result;
  } catch (error) {
    const err = {};
    err.message = error.error || 'New waitinglist entry could not be created successfully';
    return err;
  }
};
