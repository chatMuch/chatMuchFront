'use strict';

import Card from 'react-bootstrap/Card';
import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';

function AccountCards(user){

  return(
    <div>
      <CardGroup>
        <Card >
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Customers</Card.Title>
            <Card.Text>
              <p>{user.data}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{Date()}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>

  );
} 

export default AccountCards;