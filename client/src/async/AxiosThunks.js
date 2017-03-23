import axios from 'axios'
import { CALLING, SUCCESS, ERROR } from './AsyncStatus';

const applyDispatch = (dispatch, type, status, payload) => {
  return dispatch({
    type: type,
    status: status,
    payload: payload
  })
}

export const getThunk = (type, url) => (dispatch) => {
  applyDispatch(dispatch, type, CALLING)
  return axios.get(url)
    .then(response => applyDispatch(dispatch, type, SUCCESS, response.data))
    .catch(err => applyDispatch(dispatch, type, ERROR, err))
}

export const postThunk = (type, url, request) => (dispatch) => {
  applyDispatch(dispatch, type, CALLING)
  return axios.post(url, request)
    .then(response => applyDispatch(dispatch, type, SUCCESS, response.data))
    .catch(err => applyDispatch(dispatch, type, ERROR, err))
}