import axios from "axios";
import { server } from '../../server';
import { useDispatch } from "react-redux";
// Import LoadUserRequest and LoadUserSuccess actions if not already imported

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(LoadUserRequest()); // Assuming LoadUserRequest action is defined
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch(LoadUserSuccess(data.user)); // Assuming LoadUserSuccess action is defined
  } catch (error) {
    // dispatch(LoadUserFail(error.response.data.message)); // Uncomment and handle LoadUserFail action if needed
  }
};
