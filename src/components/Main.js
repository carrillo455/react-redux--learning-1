import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './Card'

const Main = () =>
  <div style={ {padding: 20} }>
    <Grid justify="center" spacing={16}>
      <Card />
    </Grid>
  </div>

export default Main