import { email_validator, g_response, response, s_person, usecase, u_person } from './protocols'
import * as R from 'ramda';
export class savePerson implements usecase{
  constructor (
    private readonly email_validator: email_validator
  ) {}
  handle(person_data: u_person): response {

    const required_fields = ['name', 'age', 'password'];
    if (R.isEmpty(person_data)) {
      return g_response<Error>(400, new Error('incomming object is empty'))
    }

    for (const iterator of required_fields) {
      if (!person_data[iterator]) {
        return g_response<Error>(400, new Error('there are missing fields'))
      }
    }

    const is_email_validated = this.email_validator.validate(person_data['email']);
    if (!is_email_validated) {
      return g_response<Error>(400, new Error('email is not valid'));
    }
    return g_response<s_person>(200, {
      id: '12345',
      name: 'Onodera Pumpum',
      age: 20,
      password: '^IloveAiko$'
    })
  }
}