import axios from 'axios'

export const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  withCredentials: true
})

request.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

request.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    if (error.response.status === 401) {
      try {
        const accessToken = await axios.put('/refresh-token', null, {
          baseURL: import.meta.env.VITE_BASE_API,
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        error.config.headers.Authorization = `Bearer ${accessToken.data.accessToken}`
        localStorage.setItem('accessToken', accessToken.data.accessToken)
        return request(error.config)
      } catch (error) {
        localStorage.removeItem('accessToken')
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)
