import { email_validator } from '../savePerson/protocols'
import validator from 'validator';
export class Email_validator implements email_validator {
  validate(email: string): boolean {
    return validator.isEmail(email)
  }
}