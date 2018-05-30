let nextUserId = 0
export const addUser = (username, password, email) => ({
  type: 'ADD_USER',
  id: nextUserId++,
  username,
  password,
  email
})