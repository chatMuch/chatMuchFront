/* eslint-disable react/prop-types */
'use strict';

import Card from 'react-bootstrap/Card';
import React, {useState, useEffect} from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ThemeProvider } from 'react-bootstrap';


function AccountCards({user, setUser}){
  const [customer, setCustomer] = useState('');

  //   useEffect(() => {
  //     axios.get('http://localhost:3000/users', {
  //       headers: {
  //         'Authorization' : `Bearer ${user.token}`},
  //     })
  //       .then( function(response) {
  //         let temp = response.data.user.customer;
  //         setCustomer(temp);
  //       })
  //       .catch( function(err) {
  //         console.error(err);
  //       });
  //   });

  const destroyCustomer = (id, e) => { 
    axios.delete(`http://localhost:3000/api/v2/customers/${user.id}`, {
      headers:{
        'Authorization' : `Bearer ${user.token}`},
    })
      .then( function(response) {
        console.log('Deleted', {customer});
        console.log('Response for delete', response);
        setCustomer(customer);
      })
      .catch( function(err) {
        console.error(err);
      });
  };



  return(
    <div>
      <CardGroup>
        <Card >
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title style={{color: 'black'}}>Customer:</Card.Title>
            <Card.Text>
              <p style={{color:'black'}}>{customer}</p>
            </Card.Text>
          </Card.Body>
          <Button onClick={destroyCustomer}>Delete</Button>
          <Card.Footer>
            <small className="text-muted">{Date()}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>

  );
} 

export default AccountCards;