import { u_person } from '../savePerson/protocols';
import { fs_persists_user } from './fs_persists_user';
describe('fs persists user data layer', () => {
  const make_sut = () => {
    const fs_persists = new fs_persists_user();
    return fs_persists;
  }
  test('ensures person_data isn\'t empty', async () => {
    const sut = make_sut();
    //@ts-ignore
    const person_data: u_person = {}
    const result = sut.add(person_data)
    expect(result).rejects.toThrow()
  });
})
