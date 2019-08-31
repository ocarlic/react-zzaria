import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

import MainPage from './pages/main'
import Login from './pages/login'

const App = () => (
  <Fragment>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  </Fragment>
)

export default App
