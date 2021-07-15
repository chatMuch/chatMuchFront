/* eslint-disable react/prop-types */

// 3rd party resources
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const axios = require('axios');

// Styling resources
import './home.scss';


function Homepage({ socket, user, setUser }) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [roomname, setroomname] = useState('');
  

  
  //activates joinRoom function defined on the backend 

  const sendData = () => {

    // remove after testing
    const signUpInfo = {
      username,
      password,
      role: 'salesPerson',
    };

    axios.post('http://localhost:3000/signup', signUpInfo)
      .then( function(response) {
        setUser(response.data.user);
        console.log(user);
      })
      .catch( function(err) {
        console.log(err);
      });

    if (username !== '' && roomname !== '') {
      console.log(username, roomname);
      socket.emit('joinRoom', { username, roomname });

      //if empty error message pops up and returns to the same page
    } else {
      alert('Enter Username, Password, and Room Name');
      window.location.reload();
    }
  };

  return (
    <div>
      <div className='homepage'>
        <h1 id='colorH1' style={{background: 'black', color:'white'}}>chatMuch</h1>
        <input style={{marginLeft: '10%'}} placeholder='Input your username' value={username} onChange={(e) => setusername(e.target.value)}/>
        <input style={{marginLeft: '10%'}} placeholder='Input your password' value={password} onChange={(e) => setpassword(e.target.value)}/>
        {/* <input placeholder='Input the room name' value={roomname} onChange={(e) => setroomname(e.target.value)} /> */}
        <DropdownButton
          align="end"
          title="Rooms"
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item value={roomname} onSelect={() => setroomname('1')}>Room1</Dropdown.Item>
          <Dropdown.Item value={roomname} onSelect={() => setroomname('2')}>Room2</Dropdown.Item>
          <Dropdown.Item value={roomname} onSelect={() => setroomname('3')}>Room3</Dropdown.Item>
          <Dropdown.Divider />
        </DropdownButton>
        {/* Add third placeholder for password (option to remove) */}
        <Link to={`/chat/${roomname}/${username}`}>
          <button onClick={sendData}>Join</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;