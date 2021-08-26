import { g_response, response, s_person, usecase, u_person } from './protocols'
import * as R from 'ramda';
export class savePerson implements usecase{
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

    return g_response<s_person>(200, {
      id: '12345',
      name: 'Onodera Pumpum',
      age: 20,
      password: '^IloveAiko$'
    })
  }
}