export const getToken = () => {
  const accessTokenFromQuery = new URLSearchParams(window.location.search).get('access_token')
  if (accessTokenFromQuery) {
    localStorage.setItem('accessToken', accessTokenFromQuery)
    window.history.replaceState({}, document.title, window.location.pathname)
    return accessTokenFromQuery
  }
  return localStorage.getItem('accessToken')
}
export const setToken = (token: string) => localStorage.setItem('accessToken', token)
export const removeToken = () => localStorage.removeItem('accessToken')
