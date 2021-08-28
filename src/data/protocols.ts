import { s_person, u_person } from "../savePerson/protocols";

export interface persist_user_repository {
  save(u_person: s_person): Promise<s_person>
}