import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Card from './Card'
import Table from './Table'
import AddUser from '../containers/AddUser'

const Main = () =>
  <div style={ {padding: 20} }>
    <Grid container justify="center" spacing={16}>
      <AddUser />
      <Table />
    </Grid>
  </div>

export default Main