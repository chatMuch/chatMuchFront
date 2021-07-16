/* eslint-disable react/prop-types */

'use strict';


// 3rd party resources
import React from 'react';
// const axios = require('axios');

// Styling resources
import './accounts.scss';
import AccountCards from './accountCards/accountsCards.js'; 
import CreateUserForm from '../accounts/createUserForm.js';

function Accounts({ user, setUser}) {
  
  // const usersRef = useRef([]);
  let i =0;

  
  console.log('from accounts', user);
    
  return (
    <div style={{background: '#322b34'}} className="Accounts">
      <h1 className="user">User: {user.username} {console.log('from accounts jsx', user)}</h1>
      <h2 className="user">Role: {user.role}</h2>
      <h2 className="user">Permissions: {user.capabilities + ''}</h2>
      <div>
        <div style={{marginTop:'10%'}}>
          <CreateUserForm setUser={setUser} user={user}/> 
        </div>
        {user.customers.map(item => {return <AccountCards key={i++} user={user} setUser={setUser} customer={item}/>;} )}
      </div>
    </div>
  );
}

export default Accounts;
