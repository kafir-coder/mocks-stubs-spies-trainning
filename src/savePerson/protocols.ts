export type u_person = {
  name: string,
  age: number,
  password: string,
  email: string
}

export type response = {
  status: number,
  body: any
}

export type s_person = {
  id: string,
  name: string,
  age: number,
  password: string,
  email: string
}

export interface usecase {
  handle(u_person: u_person): response
}

export function g_response<T>(status_code: number, body: T) {
  return {
    status: status_code,
    body: body
  }
}

export interface email_validator {
  validate(email: string): boolean
}