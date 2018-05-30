let nextUserId = 0
export const addUser = (firstName, lastName, email) => ({
  type: 'ADD_USER',
  id: nextUserId++,
  firstName,
  lastName,
  email
})