import { g_response, response, s_person, usecase, u_person } from './protocols'
import * as R from 'ramda';
export class savePerson implements usecase{
  handle(person_data: u_person): response {

    if (R.isEmpty(person_data)) {
      return g_response<Error>(400, new Error('incomming object is empty'))
    }

    return g_response<s_person>(200, {
      id: '12345',
      name: 'Onodera Pumpum',
      age: 20,
      password: '^IloveAiko$'
    })
  }
}