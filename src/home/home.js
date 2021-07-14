/* eslint-disable react/prop-types */

// 3rd party resources
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
// Styling resources
import './home.scss';
import { select } from 'async';


function Homepage({ socket }) {
  const [username, setusername] = useState('');
  const [roomname, setroomname] = useState('');

  //activates joinRoom function defined on the backend 

    const sendData = () => {
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
                <input style={{marginLeft: "10%"}} placeholder='Input your user name' value={username} onChange={(e) => setusername(e.target.value)}/>
                {/* <input placeholder='Input the room name' value={roomname} onChange={(e) => setroomname(e.target.value)} /> */}
                <DropdownButton
                    align="end"
                    title="Rooms"
                    id="dropdown-menu-align-right"
                    >
                    <Dropdown.Item value={roomname} onSelect={() => setroomname("1")}> Room1 </Dropdown.Item>
                    <Dropdown.Item value={roomname} onSelect={() => setroomname("2")}>Room2</Dropdown.Item>
                    <Dropdown.Item value={roomname} onSelect={() => setroomname("3")}>Room3</Dropdown.Item>
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