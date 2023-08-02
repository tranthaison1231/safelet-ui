import { request } from '@/utils/request'

export interface RegisterParams {
  email: string
  password: string
  firstName: string
  lastName: string
  phoneNumber: string
}

enum Role {
  admin = 'admin',
  user = 'user'
}

export interface User {
  _id: number
  email: string
  firstName: string
  avatarURL: string
  lastName: string
  role: Role
}

export const signIn = (data: { email: string; password: string }) => {
  return request.post('/sign-in', data)
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

export const getProfile = () => {
  return request.get<{ user: User }>('/profile')
}

interface UpdatedUserDto {
  phoneNumber: string
  avatarURL: string
}

export const updateProfile = (data: UpdatedUserDto) => {
  return request.put<{ user: User }>('/profile', data)
}

export const logout = () => {
  return request.put('/logout')
}
