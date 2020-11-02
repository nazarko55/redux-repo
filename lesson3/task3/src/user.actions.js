export const SAVE_USER = 'CART/SAVE_USER';
export const RESET_USER = 'CART/RESET_USER ';

export const addUser = (userData) => {
  return {
    type: SAVE_USER,
    payload: {
      userData
    }
  }
}

export const removeUser = (userId) => {
  return {
    type: RESET_USER,
    payload: {
      userId
    }
  }
}