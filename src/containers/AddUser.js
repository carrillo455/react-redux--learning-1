import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'

const AddUser = ({ dispatch }) => {
  let usernameInput,
      passwordInput,
      emailInput

  return (
    <div>
      <form onSubmit={e => {
        debugger
        e.preventDefault()
        if (!usernameInput.value.trim()
            || !passwordInput.value.trim()
            || !emailInput.value.trim()) {
          return
        }

        dispatch(
          addUser(usernameInput.value, passwordInput.value, emailInput.value)
        )

        usernameInput.value = ''
        passwordInput.value = ''
        emailInput.value = ''
      }}>
        <input ref={node => usernameInput = node} placeholder="Username" />
        <input ref={node => passwordInput = node} placeholder="Password" />
        <input ref={node => emailInput = node} placeholder="Email" />
        <button type="submit">
          Add User
        </button>
      </form>
    </div>
  )
}

export default connect()(AddUser)
