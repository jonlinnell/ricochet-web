import axios from 'axios'

import C from './constants'

import hostResolver from '../lib/hostResolver'
import authHeader from '../lib/authHeader'

const host = hostResolver()

export const addError = message =>
  ({
    type: C.ADD_ERROR,
    payload: message
  })

export const clearError = index =>
  ({
    type: C.CLEAR_ERROR,
    payload: index
  })

export const loginRequest = user => ({
  type: C.LOGIN_REQUEST,
  user
})

export const loginSuccess = user => ({
  type: C.LOGIN_SUCCESS,
  user
})

export const loginFailure = error => ({
  type: C.LOGIN_FAILURE,
  error
})

export const logoutRequest = () => ({ type: C.LOGOUT_REQUEST })
export const logoutSuccess = () => ({ type: C.LOGOUT_SUCCESS })
export const logoutFailure = () => ({ type: C.LOGOUT_FAILURE })

export const sessionResume = () => (dispatch) => {
  dispatch({ type: C.SESSION_FETCHING })

  axios({
    mathod: 'POST',
    headers: authHeader(),
    url: `${host}/auth/me`
  })
    .then(response => dispatch(loginSuccess(response.data.username)))
    .catch(error => dispatch(loginFailure(error.response.data.message)))
}

export const login = credentials => (dispatch) => {
  dispatch(loginRequest(credentials.username))
  axios({
    method: 'POST',
    url: `${host}/auth/login`,
    data: credentials
  })
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      dispatch(loginSuccess(credentials.username))
    })
    .catch(error => dispatch(loginFailure(error.response.data.message)))
}

export const logout = () => (dispatch) => {
  dispatch(logoutRequest())
  localStorage.removeItem('token')
  localStorage.getItem('token')
    ? dispatch(logoutFailure())
    : dispatch(logoutSuccess())
}

export const loadURLs = () => (dispatch) => {
  dispatch({ type: C.URLS_FETCHING })

  axios({
    method: 'GET',
    url: `${host}/url`,
    headers: authHeader()
  })
    .then(response => dispatch({
      type: C.URLS_COMPLETE,
      payload: response.data
    }))
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch({ type: C.URLS_CANCEL })
    })
}

export const modifyURL = url => (dispatch) => {
  dispatch({ type: C.MODIFY_URL, payload: url.id })

  axios({
    method: 'PUT',
    url: `${host}/url/${url.id}`,
    headers: authHeader(),
    data: { title: url.title, url: url.url }
  })
    .then(() => {
      dispatch({ type: C.MODIFY_URL_COMPLETE })
      dispatch(loadURLs())
    })
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch({ type: C.MODIFY_URL_COMPLETE })
    })
}
