import type { AxiosError } from 'axios'
import toast from 'react-hot-toast'

export const showError = (error: unknown) => {
  let message = null
  if (error instanceof Error) {
    message = (error as AxiosError<{ message: string }>).response?.data.message
  }
  if (typeof error === 'string') {
    message = error
  }
  toast.error(message ?? 'Internal Server Error')
}
