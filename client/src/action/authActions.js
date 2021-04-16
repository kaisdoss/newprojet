import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
} from "./types";
import axios from "axios";
import SetToken from "../SetToken";

export const registerUser = (info) => (dispatch) => {
  console.log(info);
  axios
    .post("http://localhost:5000/register", info)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data,
      })
    );
};

export const loginUser = (info) => (dispatch) => {
  axios
    .post("http://localhost:5000/login", info)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data,
      })
    );
};

export const loadUser = () => (dispatch) => {
  SetToken()
  axios

    .get("http://localhost:5000/login")
    .then((res) =>
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response.data.msg,
      })
    );
};

export const logoutUser =()=> dispatch =>{
dispatch({
  type: LOGOUT
})
}
