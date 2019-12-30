import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import firebase from '../../services/firebase'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

function Login() {
  const [ userInfo, setUserInfo ] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const { isUserLoggedIn, user } = userInfo

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  return (
    <Container>
      <Grid container justify='center' spacing={3}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <button
                variant='contained'
                onClick={logout}
              >
                Sair
              </button>
            </>
          )}
          {!isUserLoggedIn && (
            <GitHubButton
              onClick={login}>
              Entrar com Github
            </GitHubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login

const Container = styled.div`
  padding: 20px;
`;

const Logo = styled(MainLogo) `
  width: 100%;
`;

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
}) `
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`;
