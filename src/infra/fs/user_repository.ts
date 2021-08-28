import { s_person } from "../../savePerson/protocols";
import { fs_persists_user_repository } from "./protocols";

export class user_repository implements fs_persists_user_repository {
  async save(person_data: s_person): Promise<s_person> {
    
  }
}