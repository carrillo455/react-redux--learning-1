import React from 'react'
import { connect } from 'react-redux'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const UserList = ({ users }) => (
  users.map(user => {
    return (
      <TableRow key={user.id}>
        <TableCell component="th" scope="row">
          {user.firstName}
        </TableCell>
        <TableCell>{user.lastName}</TableCell>
        <TableCell>{user.email}</TableCell>
      </TableRow>
    );
  })
)

const mapStateToProps = state => ({
  users: state.users
})

export default connect(
  mapStateToProps
)(UserList)
