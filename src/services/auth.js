export const getUser = () =>
  window.localStorage.getItem('gatsbyUser')
    ? JSON.parse(window.localStorage.getItem('gatsbyUser'))
    : {}
const setUser = user =>
  window.localStorage.setItem(
    'gatsbyUser',
    JSON.stringify(user)
  )
export const handleLogin = ({ username, password }) => {
  if (username === `john` && password === `pass`) {
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`
    })
  }
  return false
}
export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}
export const logout = callback => {
  setUser({})
  callback()
}
