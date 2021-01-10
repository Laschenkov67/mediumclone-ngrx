import { AuthStateInterface } from '../../types/auth-state.interface';
import { authActionTypes } from '../enums/auth.enum';
import { AuthActions } from '../actions/auth.actions';

//Задаем начальные значения
const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {

    case authActionTypes.SIGN_UP: {
      return {
        ...state,
        isSubmitting: true,
        validationErrors: null
      };
    }

    case authActionTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.payload
      };
    }

    case authActionTypes.SIGN_UP_FAIL: {
      return {
        ...state,
        isSubmitting: false,
        validationErrors: action.payload
      }
    }

    default: {
      return state;
    }
  }
}