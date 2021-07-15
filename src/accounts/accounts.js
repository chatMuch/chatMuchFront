/* eslint-disable react/prop-types */

'use strict';


// 3rd party resources
import React from 'react';
// const axios = require('axios');

// Styling resources
import './accounts.scss';
import AccountCards from './accountCards/accountsCards.js'; 

function Accounts({ user, setUser}) {
  
  // const usersRef = useRef([]);
  let i =0;

  console.log('from accounts', user);
    
  return (
    <div className="Accounts">
      <h1>User: {user.username} {console.log('from accounts jsx', user)}</h1>
      <h2>Role: {user.role}</h2>
      <h2>Permissions: {user.capabilities + ''}</h2>
      <div>
        {user.customers.map(item => {return <AccountCards key={i++} user={user} setUser={setUser} customer={item}/>;} )}
      </div>
    </div>
  );
}

export default Accounts;
