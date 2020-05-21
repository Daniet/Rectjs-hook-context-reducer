import React, {
  useContext,
  useState,
} from 'react'
import { Redirect } from 'react-router-dom'

import {
  Button,
  Grid,
  TextField,
} from '@material-ui/core'

import { CardStoreContext } from '../stores/CardStore'

const Home = () => {
  const [state, dispatch] = useContext(CardStoreContext)
  const [data, setData] = useState({
    title: '',
    description: '',
  })
  const [redirect, setRedirect] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'addCard', payload: data })
    setRedirect(true)
  }

  return <Grid container>
    { redirect ? <Redirect to={'/cards'} /> : null}
    <Grid item xs={12} md={6} lg={4}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <h1>Create card</h1>
          </Grid>
          <Grid item xs={12}>
            <TextField required label="Title" defaultValue={data.title}
              onChange={(e) => setData({ ...data, title: data.title })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField required multiline label="Description" defaultValue={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit}>
              Create Card
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
}

export default Home
