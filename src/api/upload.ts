import { request } from '@/utils/request'

export const uploadImage = (data: FormData) => {
  return request.post('/upload', data)
}
