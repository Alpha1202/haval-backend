import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const decryptPassword = (userPassword, hashedPassword) => {
  const password = bcrypt.compareSync(userPassword, hashedPassword);
  return password;
};
