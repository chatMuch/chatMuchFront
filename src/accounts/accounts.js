/* eslint-disable react/prop-types */

'use strict';


// 3rd party resources
import React, { useEffect } from 'react';
const axios = require('axios');

// Styling resources
import './accounts.scss';
import AccountCards from './accountCards/accountsCards.js'; 

function Accounts({ user }) {


  useEffect(() => {
    console.log(user);
    axios.get(`http://localhost:3000/api/v2/customers/${user.id}`, { headers:{
      'Authorization': `Bearer ${user.token}`,
    }})
      .then( function(response){
        console.log('response', response);
      })
      .catch(function(err){
        console.error(err);
      });
  });



  return (
    <div className="Accounts">
      <h1>User: {user.username}</h1>
      <h2>Role: {user.role}</h2>
      <h2>Permissions: {user.capabilities + ''}</h2>
      <div>
        <AccountCards />
      </div>
    </div>
  );
}

export default Accounts;
