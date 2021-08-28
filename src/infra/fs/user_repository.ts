import { s_person } from "../../savePerson/protocols";
import { fs_load_user_repository, fs_persists_user_repository } from "./protocols";
import { writeFile, readFile } from 'fs/promises';
export class user_repository implements fs_persists_user_repository, fs_load_user_repository {
  async save(person_data: s_person): Promise<void> {
    await writeFile(person_data['email']+person_data['age'], JSON.stringify(person_data));     
  }
  async loadById(id: string) {
    await readFile(id)
  }
}