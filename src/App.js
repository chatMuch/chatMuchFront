'use strict';

// 3rd party resources
import React from 'react';

import io from "socket.io-client";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Accounts from './accounts/accounts'
// import Navbar from 'react-bootstrap/Navbar'
const socket = io.connect('http://localhost:3000/chat')

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

// Esoteric resources
import Chat from './chat/chat.js';
import Process from './process/process';
import Home from './home/home';

// Style resources
import './App.scss';

// Connect to socket server
const socket = io.connect('http://localhost:3000/chat');


function Appmain(props) {
  return (
    <div>

<div>
        <Navbar style={{marginBottom: "5%"}} className="Nav" bg="dark" variant="dark">
    <Navbar.Brand href="/"><img src='./images/logo.jpg' alt='logo'/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/accounts">Accounts</Nav.Link>
    </Nav>
    <Form style={{display:"inline-flex", width: "30%"}} inline>
      <FormControl  type="text" placeholder="Search Accounts" className="mr-sm-2" />
      <div style={{margin:"2%"}} >
      <Button  variant="outline-info">Search</Button>
      </div>
    </Form>
  </Navbar>
        </div> 
    <React.Fragment>
    <div className="left"> 
    <Process style={{background:"black", opacity: "70%"}}/> 

      <div>
        <Navbar style={{ marginBottom: '5%' }} className='Nav' bg='dark' variant='dark'>
          <Navbar.Brand href='#home'><img src='./images/logo.jpg' alt='logo'/></Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Accounts</Nav.Link>
          </Nav>
        <Form style={{display:'inline-flex', width: '30%'}} inline>
          <FormControl  type='text' placeholder='Search Accounts' className='mr-sm-2' />
          <div style={{margin:'2%'}} >
            <Button  variant='outline-info'>Search</Button>
          </div>
        </Form>
      </Navbar>

    </div> 
      <React.Fragment>
      <div className='left'> 
        <Process style={{background:'black', opacity: '70%'}}/> 
      </div> 
      <div className='right'>
        <div>
          <Chat 
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
          />
        </div>
      </div>
      </React.Fragment>
    </div>
  );
}
function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <Home socket={socket} />
          </Route>
          <Route path='/chat/:roomname/:username' component={Appmain} />
        </Switch>
        <Switch>
          <Route path="/accounts" exact>
            <Accounts/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
