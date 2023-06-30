export const getToken = () => localStorage.getItem('accessToken')
export const setToken = (token: string) => localStorage.setItem('accessToken', token)
