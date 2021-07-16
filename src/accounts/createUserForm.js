// import 3rd party resources
import React, {useState} from 'react';
import axios from 'axios';
// import styling 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../accounts/form.scss';

const createUserForm = ({user, setUser}) => {
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const customer = {
    name: name,
    jobTitle: job,
    phone: phone,
    email: email,
  };

  const sendData = () => { 
    
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v2/customers',
      headers: {'Authorization': `Bearer ${user.token}`},
      data: customer, 
    })
      .then( function(response) {
        alert('Created Customer');
      });
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
      
  };
  return (
    <div className="form">
      <div className="form-border">

        <Form>
          <Form.Group controlId="formBasicJob">
            <Form.Label> Name</Form.Label>
            <Form.Control 
              className="stringBar"
              type="text" 
              placeholder="Enter Name"
              value={name}
              onChange={(e)=> setName(e.target.value)} 
            />
          </Form.Group>

          <Form.Group controlId="formBasicJob">
            <Form.Label>Job</Form.Label>
            <Form.Control 
              className="stringBar"
              type="text" 
              placeholder="Enter job title"
              value={job}
              onChange={(e)=> setJob(e.target.value)} 
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="stringBar"
              type="email" 
              placeholder="Enter Email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}  
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
              className="stringBar"
              type="number" 
              placeholder="Phone" 
              value={phone}
              onChange={(e)=> setPhone(e.target.value)} 
            />
          </Form.Group>
          {/* <Link to={`/accounts/${user.id}`}> */}
          <Button style={{width: '100px', height: '35px', marginTop: '5%', marginBottom:'2%'}} variant="primary" onClick={sendData} block >
            {/* </Link> */}
            CREATE
          </Button>
        </Form>
      </div>
    </div>

  );
};

export default createUserForm;