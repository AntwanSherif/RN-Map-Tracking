import createDataContext from './createDataContext';

const initialState = { token: null };

const signin = dispatch => token => dispatch({ type: 'SIGNIN', payload: token });
const signout = dispatch => () => dispatch({ type: 'SIGNOUT' });

const authReducer = (state, action) => {
  switch (action.key) {
    case 'SIGNIN':
      return { token: action.payload };

    case 'SIGNOUT':
      return { token: null };

    default:
      return state;
  }
};

export const { Context: AuthContext, Provider: AuthProvider } = createDataContext(
  authReducer,
  { signin, signout },
  initialState
);
