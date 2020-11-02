import { SAVE_USER, RESET_USER } from './user.actions';

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case SAVE_USER:
      return action.payload.userData

    case RESET_USER:
      return null

    default:
      return state;
  }
}