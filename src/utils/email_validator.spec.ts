import { Email_validator } from './email_validator';
import validator from 'validator';
jest.mock('validator', () => ({
  isEmail: () => true
}))
const make_sut = () => new Email_validator()
describe('email validator adaptor', () => {
  afterEach(() => {
    jest.mock('validator').clearAllMocks()
  })
  test('ensure validate returns true if email is valid', () => {
    const sut = make_sut();
    const email = 'valid.email@gmail.com';
    const response = sut.validate(email);
    expect(response).toBe(true)
  });
  
  test('ensure validate returns false if email is invalid', () => {
    const sut = make_sut();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const email = 'valid.email@gmail.com';
    const response = sut.validate(email);
    expect(response).toBe(false)
  })
  
  test('ensure validate method calls isEmail from validator with proper email', () => {
    const sut = make_sut();
    const email = 'pumpum@onodera.com'
    const validator_spy = jest.spyOn(validator, 'isEmail');
    sut.validate(email);
    expect(validator_spy).toHaveBeenCalledTimes(1);
    expect(validator_spy).toHaveBeenCalledWith(email)
  })
  
})
