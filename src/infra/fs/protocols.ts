import { s_person } from "../../savePerson/protocols";

export interface fs_persists_user_repository {
  save(person_data: s_person): Promise<s_person>
}