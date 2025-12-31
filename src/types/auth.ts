export interface UserForLoginDto {
  email: string
  password: string
  authenticatorCode?: string
}

export interface AccessToken {
  token: string
  expiration: string
}

export interface LoggedResponse {
  accessToken?: AccessToken
  requiredAuthenticatorType?: string
}
