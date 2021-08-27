import { email_validator, g_response, u_person } from './protocols';
import { savePerson } from './save_person'
import { email_validator_stub } from './__mocks__/email_validator'
describe('save person usecase', () => {

  const make_sut = () => {
    const validator_stub: email_validator = new email_validator_stub();
    const save_person: savePerson  = new savePerson(validator_stub);
    return {
      validator_stub,
      sut: save_person
    }
  }
  
  test('ensure that the u_person object isn\'t empty', () => {
    const {sut} = make_sut();
    //@ts-ignore
    const u_person: u_person = {};
    const response = sut.handle(u_person);
    const expect_stub = {
      status: 400,
      body: new Error('incomming object is empty')
    }
    expect(response).toMatchObject(expect_stub)
  });

  test('ensure that the controllers returns a 400 error if a required field is missing', () => {
    const {sut} = make_sut();
    //@ts-ignore
    const u_person: u_person = {
      name: 'Onodera Pumpum',
      age: 12,
      //password: '^iloveaiko$'
    };
    const expect_stub = {
      status: 400,
      body: new Error('there are missing fields')
    };
    const response = sut.handle(u_person) 
    expect(response).toMatchObject(expect_stub);
  });

  test('ensure that email is validated', () => {
    const {sut, validator_stub} = make_sut();
    const u_person: u_person = {
      name: 'Onodera Pumpum',
      age: 12,
      password: '^iloveaiko$',
      email: 'onodera@pumpu.com'
    };
    const validator_spy = jest.spyOn(validator_stub, 'validate');
    sut.handle(u_person);
    expect(validator_spy).toHaveBeenCalledWith(u_person['email']);
    expect(validator_spy).toHaveBeenCalledTimes(1)
  })
});
