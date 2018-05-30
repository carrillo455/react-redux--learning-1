import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'

const AddUser = ({ dispatch }) => {
  let firstNameInput,
      lastNameInput,
      emailInput

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!firstNameInput.value.trim()
            || !lastNameInput.value.trim()
            || !emailInput.value.trim()) {
          return
        }

        dispatch(
          addUser(firstNameInput.value, lastNameInput.value, emailInput.value)
        )

        firstNameInput.value = ''
        lastNameInput.value = ''
        emailInput.value = ''
      }}>
        <input ref={node => firstNameInput = node} placeholder="First Name" />
        <input ref={node => lastNameInput = node} placeholder="Last Name" />
        <input ref={node => emailInput = node} placeholder="Email" />
        <button type="submit">
          Add User
        </button>
      </form>
    </div>
  )
}

export default connect()(AddUser)
