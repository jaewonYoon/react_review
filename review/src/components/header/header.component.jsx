import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';

const signOut = async (history) => {
  await auth.signOut(); 
  await setTimeout(() => {
    console.log('done')
  },5000); 
  history.push('/');
}

const Header = ({currentUser,history}) => {
  console.log(currentUser);
  return (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
        :
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      }
    </div>
  </div>
)
  };

export default withRouter(Header);
