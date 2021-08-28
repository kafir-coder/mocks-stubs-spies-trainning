import fsPromises from 'fs/promises';
import { user_repository } from './user_repository';
describe('user repository', () => {
  const make_sut = () => {
    const sut = new user_repository()
    return sut
  }
  test('ensure user_repository.save calls fsPromises.writeFile', async () => {
    const sut = make_sut();
    const person_data = {
      id: 'mogli@keit.com19',
      name: 'Tony Jelinek von Kyanda',
      age: 19,
      password: '^IloveAiko$',
      email: 'mogli@keit.com'
    }
    const writeFile_spy = jest.spyOn(fsPromises, 'writeFile');
    sut.save(person_data)
    expect(writeFile_spy).toHaveBeenCalled();
    expect(writeFile_spy).toHaveBeenCalledTimes(1);
    expect(writeFile_spy).toHaveBeenCalledWith(person_data['email']+person_data['age'], JSON.stringify(person_data))
  })
});
