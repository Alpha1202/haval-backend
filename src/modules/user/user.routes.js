import { Router } from 'express';

import { createAdminUser, createNewUser, loginUser } from './user.controller';
import { authValidator, validate } from '../../services/validation.service';
import { formatAdminData, formatUserData, checkUser } from './user.middleware';

const { passwordValidator, emailValidator, usernameValidator } = authValidator;

const routes = Router();

routes.post(
  '/register',
  emailValidator,
  usernameValidator,
  passwordValidator,
  validate,
  checkUser,
  formatUserData,
  createNewUser
);

routes.post(
  '/newAdmin',
  emailValidator,
  usernameValidator,
  passwordValidator,
  validate,
  checkUser,
  formatAdminData,
  createAdminUser
);

routes.post('/login', passwordValidator, validate, loginUser);

export default routes;
