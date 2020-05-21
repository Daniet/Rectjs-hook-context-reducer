import React from 'react'
import { Link } from 'react-router-dom'

import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core'

const Header = () => <AppBar position="static">
  <Toolbar>
    <Button color="inherit" component={Link} to="/">
      Home
    </Button>
    <Button color="inherit" component={Link} to="/cards">
      Cards
    </Button>
  </Toolbar>
</AppBar>

export default Header
