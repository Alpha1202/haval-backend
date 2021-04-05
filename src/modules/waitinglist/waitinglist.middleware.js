/* eslint-disable import/prefer-default-export */
import { v4 as uuidv4 } from 'uuid';

import { getListEntry } from './waitinglist.model';

export const checkListEntry = async (req, res, next) => {
  const { email, phone } = req.body;

  try {
    const isListEntry = await getListEntry(email, phone);

    if (isListEntry) {
      return res.status(409).json({
        status: 409,
        message: 'This email or phone number already subscribed',
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};

export const formatEntryData = async (req, res, next) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    category,
    organization,
  } = req.body;

  try {
    const listEntryData = {
      waitinglistId: uuidv4(),
      email: email.toLowerCase(),
      firstname,
      lastname,
      phone,
      category,
      organization,
    };

    req.payload = { listEntryData };

    return next();
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};
