import { g_response, u_person } from './protocols';
import { savePerson } from './save_person'
describe('save person usecase', () => {

  const make_sut = () => new savePerson()
  
  test('ensure that the u_person object isn\'t empty', () => {
    const sut = make_sut();
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
    const sut = make_sut();
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
  
});
