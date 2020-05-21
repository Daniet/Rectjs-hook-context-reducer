import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import './App.scss'

import { Container } from '@material-ui/core/'

import CardStore from './stores/CardStore'

import Header from './components/Header'

import Home from './pages/Home'
import Cards from './pages/Cards'

const App = () => <BrowserRouter>
  <CardStore>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cards" component={Cards} />
      </Switch>
    </Container>
  </CardStore>
</BrowserRouter>

export default App
