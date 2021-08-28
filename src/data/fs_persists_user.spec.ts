import { s_person, u_person } from '../savePerson/protocols';
import { fs_persists_user } from './fs_persists_user';
import { user_repository } from './__mocks__/user_repository'
describe('fs persists user data layer', () => {
  const make_sut = () => {
    const user_repository_stub = new user_repository()
    const fs_persists = new fs_persists_user(user_repository_stub);
    return {
      user_repository_stub,
      sut: fs_persists
    };
  }
  test('ensures person_data isn\'t empty', async () => {
    const {sut} = make_sut();
    //@ts-ignore
    const person_data: u_person = {}
    const result = sut.add(person_data)
    expect(result).rejects.toThrow()
  });

  test('ensures user_repository.save is called from data layer', async () => {
    const {sut, user_repository_stub} = make_sut();
    const person_data: u_person = {
      name: 'Tony Jelinek von Kyanda',
      age: 19,
      password: '^IloveAiko$',
      email: 'mogli@keit.com'
    };

    const user_repository_spy = jest.spyOn(user_repository_stub, 'save');
    sut.add(person_data)
    expect(user_repository_spy).toBeCalledTimes(1)
    expect(user_repository_spy).toHaveBeenCalledWith({
      id: 'mogli@keit.com19',
      ...person_data
    })
  });
})
