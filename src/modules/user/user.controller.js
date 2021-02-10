import { v4 as uuidv4 } from 'uuid';

import config from '../../db/config/config'
import { createUserAccount } from '../../dbHelpers/createUserAccount';
import { createAdminAccount } from '../../dbHelpers/createAdminAccount';
import { getUserByUsernameorEmail, getUser } from './user.model';
import { hashPassword, decryptPassword} from '../../services/passwordHash.service';
import { createToken, verifyToken } from '../../services/token.services';

export const createNewUser = async (req, res) => {
  const { userData } = req.payload;

  try {
    const data = await createUserAccount(userData);

    if (data.message) {
      return res.status(500).json({
        status: 500,
        message: data.message,
      });
    }

    return res.status(201).json({
      status: 201,
      message: 'User account created successfully',
      data: [data],
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export const createAdminUser = async (req, res) => {
  const { adminData } = req.payload;

  try {
    const data = await createAdminAccount(adminData);

    if (data.message) {
      return res.status(500).json({
        status: 500,
        message: data.message,
      });
    }

    return res.status(201).json({
      status: 201,
      message: 'Admin account created successfuly',
      data: [data],
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { credential, password } = req.body;

  try {
    const existingUser = await getUserByUsernameorEmail(credential);
    if (!existingUser) {
      return res.status(404).json({
        status: 404,
        message: 'Invalid login email credentials',
      });
    }

    const checkPassword = await decryptPassword(password, existingUser.password);
    if (!checkPassword) {
      return res.status(400).json({
        status: 400,
        message: 'Incorrect password',
      });
    }

    const payload = { id: existingUser.userId };
    const token = await createToken(payload, '24h');

    // if(existingUser.isAdmin){
    //   const payload = {
    //     adminId: existingUser.userId,
    //     firstName: existingUser.firstName,
    //     lastName: existingUser.lastName,
    //     email: existingUser.email,
    //     phoneNumber: existingUser.phoneNumber,
    //     isVerified: existingUser.isVerified,
    //     isAdmin: existingUser.isAdmin
    //   };
    //   return res.status(200).json({
    //     status: 200,
    //     message: 'Admin Login successful',
    //     data: [payload, {token}],
    //   });
    // }

    // const data = await fetchUserAccount(existingUser.userId);

    // if (data.message) {
    //   return res.status(500).json({
    //     status: 500,
    //     message: data.message,
    //   });
    // }

    return res.status(200).json({
      status: 200,
      message: 'Login successful',
      data: [{ token }],
    //   data: [{ ...data, token }],
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

// export const sendResetPasswordEmail = async (req, res) => {
//   try {
//     const userExists = await getUser(req.body.email);

//     if (!userExists) {
//       return res.status(404).json({
//         status: 404,
//         message: 'User with this email cannot be found',
//       });
//     }

//     const payload = { id: userExists.userId };
//     const token = await createToken(payload, '1h');

//     const resetToken = `${BASE_URL}/pw-forget/new-password/${token}`;
//     const message = sendResetEMailTemplate(userExists.firstName, resetToken);

//     const msg = {
//       to: req.body.email,
//       from: 'info@haval.ng',
//       subject: 'Password Reset link',
//       html: message,
//     };
//     sendEmail(msg);

//     return res.status(200).json({
//       status: 200,
//       message: 'We have sent you an email with token to reset your password',
//       data: [{ token }],
//     });
//   } catch (error) {
//     return res.status(500).json({
//       status: 500,
//       message: error.message,
//     });
//   }
// };
