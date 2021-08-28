import { s_person, u_person } from "../savePerson/protocols";

export interface persists_user {
  add(person_data: u_person): Promise<s_person>
}