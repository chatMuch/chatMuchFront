/* eslint-disable react/prop-types */

// 3rd party resources
import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const axios = require('axios');

// Styling resources
import './home.scss';


function Homepage({ socket, setUser, password, setPassword, username, setUsername, roomName, setRoomName }) {
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
      })
      .catch( function(err) {
        console.log(err);
      });

    if (username !== '' && roomName !== '') {
      console.log(username, roomName);
      socket.emit('joinRoom', { username, roomName });

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
        <input style={{marginLeft: '10%'}} placeholder='Input your username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input style={{marginLeft: '10%'}} placeholder='Input your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        {/* <input placeholder='Input the room name' value={roomName} onChange={(e) => setroomName(e.target.value)} /> */}
        <DropdownButton
          align="end"
          title="Rooms"
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item value={roomName} onSelect={() => setRoomName('1')}>Room1</Dropdown.Item>
          <Dropdown.Item value={roomName} onSelect={() => setRoomName('2')}>Room2</Dropdown.Item>
          <Dropdown.Item value={roomName} onSelect={() => setRoomName('3')}>Room3</Dropdown.Item>
          <Dropdown.Divider />
        </DropdownButton>
        {/* Add third placeholder for password (option to remove) */}
        <Link to={`/chat/${roomName}/${username}`}>
          <button onClick={sendData}>Join</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;