import { createWaitingList } from '../../dbHelpers/createWaitingList';
import { sendEmail } from '../../services/mail.services';
import { waitinglistMailTemplate } from '../../constants/mailTemplates/WaitinglistEmailTemplates'


// eslint-disable-next-line import/prefer-default-export
export const createNewListEntry = async (req, res) => {
  const { listEntryData } = req.payload;

  

  try {
    const data = await createWaitingList(listEntryData);
   
    if (data.message) {
      return res.status(500).json({
        status: 500,
        message: data.message,
      });
    }

    const name = `${listEntryData.firstname} ${listEntryData.lastname}`
    const message = waitinglistMailTemplate(name)
    const msg = {
      to: listEntryData.email,
      from: 'info@haval.ng',
      subject: 'Waiting list subscription',
      html: message,
    }
    sendEmail(msg)

    return res.status(201).json({
      status: 201,
      message: 'New List entry created successfully',
      data: [data],
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
