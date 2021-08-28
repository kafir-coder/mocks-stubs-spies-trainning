import { persists_user } from "../domain/persists_user";
import { s_person, u_person } from "../savePerson/protocols";
import { user_repository } from '../infra/fs/user_repository'
import * as R from 'ramda';
export class fs_persists_user implements persists_user {
  constructor(
    fs_persists_user_repository: user_repository
  ) {}
  async add(person_data: u_person): Promise<s_person> {
    if (R.isEmpty(person_data)) {
      return new Promise((_resolve, reject) => reject('person data is empty'))
    }
  }
}