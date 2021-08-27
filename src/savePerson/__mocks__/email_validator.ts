import { email_validator } from "../protocols";

export class email_validator_stub implements email_validator{
  validate(email: string): boolean {return true} 
}