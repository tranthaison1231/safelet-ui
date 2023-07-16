import { request } from '@/utils/request'

export const signIn = (data: { email: string; password: string }) => {
  return request.post('/sign-in', data)
}

export interface RegisterParams {
  email: string
  password: string
  firstName: string
  lastName: string
  phoneNumber: string
}

export const signUp = (data: RegisterParams) => {
  return request.post('/sign-up', data)
}

interface ResetPasswordParams {
  password: string
  token: string
}

export const resetPassword = (data: ResetPasswordParams) => {
  return request.post(
    '/reset-password',
    {
      password: data.password
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.token}`
      }
    }
  )
}
