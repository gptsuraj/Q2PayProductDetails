// redux/actions/authActions.js
import { login as apiLogin } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (username, password) => async (dispatch) => {
  try {
    const data = await apiLogin(username, password);
    await AsyncStorage.setItem('token', data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error });
    throw error;
  }
};
