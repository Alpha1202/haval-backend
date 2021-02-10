/* eslint-disable import/prefer-default-export */
import { v4 as uuidv4 } from 'uuid';

import { hashPassword, decryptPassword } from '../../services/passwordHash.service';
import { getUser, getUserById } from './user.model';

export const checkUser = async (req, res, next) => {
  const { email, username } = req.body;

  try {
    const userExists = await getUser(email);
   
    if (userExists?.username === username) {
      return res.status(409).json({
        status: 409,
        message: 'This username is already taken',
      });
    }

    if (userExists) {
      return res.status(409).json({
        status: 409,
        message: 'User with this email already exists',
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

export const formatUserData = async (req, res, next) => {
  const {
    email, username, password, gender, age, country, state
  } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const userData = {
      userId: uuidv4(),
      email: email.toLowerCase(),
      username,
      password: hashedPassword,
      gender,
      age,
      country,
      state,
      isAdmin: false
    };

    req.payload = { userData };

    return next();
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};

export const formatAdminData = async (req, res, next) => {
  const {
    email, username, password, gender, age, country, state
  } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const adminData = {
      userId: uuidv4(),
      email: email.toLowerCase(),
      username,
      password: hashedPassword,
      gender,
      age,
      country,
      state,
      isAdmin: true
    };

    req.payload = { adminData };
    return next();
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};
