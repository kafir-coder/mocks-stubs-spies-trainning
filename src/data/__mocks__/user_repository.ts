import { s_person, u_person } from "../../savePerson/protocols";
import { persist_user_repository } from "../protocols";

export class user_repository implements persist_user_repository {
  async save(person_data: s_person): Promise<s_person> {
    const {id, age, name, password} = person_data;
    return new Promise(resolve => resolve({id, name, age, password}))
  }
}