/* eslint-disable react/prop-types */
'use strict';

import Card from 'react-bootstrap/Card';
import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import './accountCards.scss';


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
      <div className="cards">
        <CardGroup >
          <Card style={{opacity:'0.7',background: '#C3B1E1'}} variant="dark">
            <Card.Body>
              <Card.Title style={{color: 'black'}}>Customer: {customer.name}</Card.Title>
              <Card.Text style={{display: 'flex', justifyContent: 'center', color: 'black'}}>
                <ul>
                  <li>
                    Job: {customer.jobTitle}
                  </li>
                  <li>
                    Email: {customer.email}
                  </li>
                  <li>
                    Phone: {customer.phone} 
                  </li>
                </ul> 
              </Card.Text>
            </Card.Body>
            <Button style={{width: '40%'}} value={customer.id} onClick={destroyCustomer}>Delete</Button>
            <Card.Footer>
              <small className="text-muted">{Date()}</small>
            </Card.Footer>
          </Card>
        </CardGroup>

      </div>
    </div>
  );
}

export default AccountCards;