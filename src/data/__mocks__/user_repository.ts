import { s_person, u_person } from "../../savePerson/protocols";
import { persist_user_repository } from "../protocols";

export class user_repository implements persist_user_repository {
  async save(person_data: s_person): Promise<void> {
    const {id, age, name, email, password} = person_data;
    //return new Promise(resolve => resolve({id, name, email, age, password}))
  }
}