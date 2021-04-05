/* eslint-disable import/prefer-default-export */
import { WaitingList } from '../../db/models';

const { Op } = require('sequelize');

export const getListEntry = async (email, phone) => {
  const foundEntry = await WaitingList.findOne({
    where: {
      [Op.or]: [
        { email },
        { phone }
      ]
    },
  });
  if (foundEntry) {
    return foundEntry;
  }
  return null;
};

