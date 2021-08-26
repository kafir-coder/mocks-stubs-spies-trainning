import { Email_validator } from './email_validator'
jest.mock('validator', () => ({
  isEmail: () => true
}))
const make_sut = () => new Email_validator()
describe('email validator adaptor', () => {
  test('ensure validate returns true if email is valid', () => {
    const sut = make_sut();
    const email = 'valid.email@gmail.com';

    const response = sut.validate(email);
    expect(response).toBe(true)
  });
  
})
