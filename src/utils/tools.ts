import { User } from '@/types/user'

export const getFullName = (user: User | null | undefined) => {
  return `${user?.firstName ?? ''} ${user?.lastName ?? ''}`
}
