import React from 'react';
import {
  Home,
  ExpandMore,
  Flag,
  Forum,
  NotificationsActive,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
  Add,
} from '@material-ui/icons';
import {useFacebookValue} from '../../Context/context';
import {Avatar, IconButton} from '@material-ui/core';

function Header() {
  const [{user}, dispatch] = useFacebookValue();

  return (
    <div className='header'>
      <div className='header-left'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png'
          alt=''
        />
        <div className='header-search'>
          <Search />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>
      <div className='header-middle'>
        <div className='header-option active'>
          <Home fontSize='large' />
        </div>

        <div className='header-option'>
          <Flag fontSize='large' />
        </div>

        <div className='header-option'>
          <SubscriptionsOutlined fontSize='large' />
        </div>

        <div className='header-option'>
          <StorefrontOutlined fontSize='large' />
        </div>

        <div className='header-option'>
          <SupervisedUserCircle fontSize='large' />
        </div>
      </div>

      <div className='header-right'>
        <div className='user-info'>
          <Avatar src={user.photoURL} />
          <h4> {user.displayName} </h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
