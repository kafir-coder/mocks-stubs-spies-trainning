import { u_person } from '../savePerson/protocols';
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
})
