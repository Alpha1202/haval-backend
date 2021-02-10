import { body, check, validationResult } from 'express-validator';

export const authValidator = {
  passwordValidator: [
    body('password')
      .trim()
      .exists({ checkFalsy: false })
      .withMessage('Password is required.')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password must be between 8 to 15 characters long.')
      .isAlphanumeric()
      .withMessage('Password must be alphanumeric.'),
  ],
  oldPasswordValidator: [
    body('old_password')
      .trim()
      .exists({ checkFalsy: false })
      .withMessage('Password is required.')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password must be between 8 to 15 characters long.')
      .isAlphanumeric()
      .withMessage('Password must be alphanumeric.'),
  ],
  newPasswordValidator: [
    body('new_password')
      .trim()
      .exists({ checkFalsy: false })
      .withMessage('Password is required.')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password must be between 8 to 15 characters long.')
      .isAlphanumeric()
      .withMessage('Password must be alphanumeric.'),
  ],
  confirmPasswordValidator: [
    body('confirm_password')
      .trim()
      .exists({ checkFalsy: false })
      .withMessage('Password is required.')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password must be between 8 to 15 characters long.')
      .isAlphanumeric()
      .withMessage('Password must be alphanumeric.'),
  ],
  emailValidator: [
    check('email')
      .trim()
      .exists({ checkFalsy: true })
      .withMessage('Email is required.')
      .isEmail()
      .normalizeEmail()
      .withMessage('Invalid email address.'),
  ],
  usernameValidator: [
    body('username')
      .trim()
      .exists({ checkFalsy: true })
      .withMessage('username is required.')
      .matches(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)
      .withMessage('Invalid user name.')
      .isLength({ min: 3, max: 20 })
      .withMessage('First name must be between 3 and 20 characters.'),
  ],
  phoneNumber: [
    body('phoneNumber')
      .trim()
      .exists({ checkFalsy: true })
      .withMessage('phone number is required.')
      .matches(/^\d{11}$/)
      .withMessage('Invalid phone number.')
      .isLength({ min: 11, max: 11 })
      .withMessage('Phone numbers must be 11 charaters long.'),
  ],
  amountValidator: [
    body('amount')
      .trim()
      .exists({ checkFalsy: true })
      .withMessage('provide an amount.')
      .matches(/^[+-]?([0-9]*[.])?[0-9]+/)
      .withMessage('Invalid amount')
      .isLength({ min: 1 })
      .withMessage('Invalid amount.'),
  ],
};

export const validate = (req, res, next) => {
  const errorFormatter = ({ msg }) => `${msg}`;
  const validationError = validationResult(req).formatWith(errorFormatter);

  if (!validationError.isEmpty()) {
    const errorMsg = validationError.mapped();

    return res.status(400).json({
      status: 400,
      message: errorMsg,
    });
  }
  return next();
};

export const uuidValidator = (req, res, next) => {
  const { id } = req.query;
  if (!id) return next();
  const uuidFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const validUuid = uuidFormat.test(id);
  if (!validUuid){
    return res.status(400).json({
      status: 400,
      message: 'Unable to process ID',
    });
  }
  next();

};
