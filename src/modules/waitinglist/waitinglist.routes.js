import { Router } from 'express';

import { createNewListEntry } from './waitinglist.controller';
import { checkListEntry, formatEntryData } from './waitinglist.middleware';
import { authValidator, validate } from '../../services/validation.service';

const {
  emailValidator, firstnameValidator, lastnameValidator, phoneValidator
} = authValidator;

const routes = Router();

routes.post(
  '/subscribe',
  emailValidator,
  firstnameValidator,
  lastnameValidator,
  // phoneValidator,
  validate,
  checkListEntry,
  formatEntryData,
  createNewListEntry
);

export default routes;
