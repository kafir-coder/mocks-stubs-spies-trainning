import { s_person } from "../../savePerson/protocols";

export interface fs_persists_user_repository {
  save(person_data: s_person): Promise<void>
}

export interface fs_load_user_repository {
  loadById(id: string): Promise<s_person>
}