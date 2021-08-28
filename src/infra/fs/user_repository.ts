import { s_person } from "../../savePerson/protocols";
import { fs_persists_user_repository } from "./protocols";
import { writeFile } from 'fs/promises';
export class user_repository implements fs_persists_user_repository {
  async save(person_data: s_person): Promise<s_person> {
    await writeFile(person_data['email']+person_data['age'], JSON.stringify(person_data));
       
  }
}