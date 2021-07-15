/* eslint-disable react/prop-types */
'use strict';

import Card from 'react-bootstrap/Card';
import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



function AccountCards({user, setUser, customer}){

  const destroyCustomer = (e) => { 
    axios.delete(`http://localhost:3000/api/v2/customers/${e.target.value}`, {
      headers:{
        'Authorization' : `Bearer ${user.token}`},
    })
      .then( function(response) {
        console.log('Deleted', {customer});
        console.log('Response for delete', response);

        axios.get(`http://localhost:3000/api/v2/customers`, {
          headers: {
            'Authorization' : `Bearer ${user.token}`},
        })
          .then( function(response) {
            setUser({...user, customers: response.data});
          })
          .catch( function(err) {
            console.error(err);
          })
          .catch( function(err) {
            console.error(err);
          });
      });
  };

  return(
    <div>
      <CardGroup>
        <Card variant="dark">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title style={{color: 'black'}}>Customer: {customer.name}</Card.Title>
            <Card.Text style={{display: 'flex', justifyContent: 'center', color: 'black'}}>
              Job: {customer.jobTitle}  Email: {customer.email}  Phone: {customer.phone} 
            </Card.Text>
          </Card.Body>
          <Button value={customer.id} onClick={destroyCustomer}>Delete</Button>
          <Card.Footer>
            <small className="text-muted">{Date()}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default AccountCards;