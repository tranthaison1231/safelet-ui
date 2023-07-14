import { request } from '@/utils/request'

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
