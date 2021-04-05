/* eslint-disable import/prefer-default-export */
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (msg) => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error, 'error message from email service server');
    if (error.response) {
      console.error(error.response.body);
    }
  }
};
