import React from 'react';
import {auth, provider} from '../../firebase';
import {useFacebookValue} from '../../Context/context';
import {actionTypes} from '../../Context/reducer';
function Login() {
  const [state, dispatch] = useFacebookValue();

  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
       dispatch({
         type: actionTypes.SET_USER,
         user: result.user
       });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className='login'>
      <div className='login-left'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREoW4yDx4gnD6oIBVEK230BqF7Oig0yR6XDw&usqp=CAU'
          alt=''
        />
        <h2>
          Facebook helps you connect and share with the people in your life.
        </h2>
      </div>

      <div className='login-right'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png'
          alt=''
        />
        <button type='submit' onClick={SignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
