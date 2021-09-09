/* eslint-disable react/prop-types */
'use strict';

// Esoteric resources
import Chat from './chat/chat.js';
import Home from './home/home';
import Accounts from './accounts/accounts';

// 3rd party resources
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import io from 'socket.io-client';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


// Style resources
import './App.scss';

// Connect to socket server
const socket = io.connect('https://tjohnson986-chatmuch.herokuapp.com/chat');

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roomName, setRoomName] = useState('');
  console.log('user in state', user);

  return (
    <Router>
      <div className="App">
        <Navbar className="Nav" bg="dark" variant="dark">
          <Navbar.Brand href="/" onClick={(e) => {alert('All Sign-data will be lost');}} >chatMuch Lite</Navbar.Brand>
          <Nav className="mr-auto">
            <div className="NavLinks">
              <Link to={`/accounts/${user.id}`}>
                Accounts
              </Link >
            </div>
            <div className="NavLinks">
              <Link to={`/chat/${roomName}/${username}`}>
                Chat
              </Link>
            </div>
          </Nav>
        </Navbar>
      </div>
      <div className="App">
        {/* path to home */}
        <Switch>
          <Route path="/" exact>
            <Home 
              setUser={setUser} 
              socket={socket} 
              username={username}
              setUsername={setUsername}
              roomName={roomName}
              setRoomName={setRoomName}
              password={password}
              setPassword={setPassword}
            />
          </Route>
          <Route path={`/chat/${roomName}/${username}`}>
            <div className="right">
              <div>
                <Chat
                  username={username}
                  roomName={roomName}
                  socket={socket}
                />
              </div>
            </div>
          </Route>
          <Route path={`/accounts/${user.id}`} user={user} exact>
            <Accounts user={user} setUser={setUser}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{/* <Nav.Link href={`/accounts/${user.id}`} onClick={(e) => e.preventDefault()} >Accounts</Nav.Link> */}
{/* <Nav.Link href={`/chat/${roomName}/${username}`} onClick={(e) => e.preventDefault()}>chat</Nav.Link> */}
export default App;
