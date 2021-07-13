'use strict';

// 3rd party resources
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Styling resources
import './home.scss';


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
                <input>
                    placeholder='Input your user name' value={username} onChange={(e) => setusername(e.target.value)}
                </input>
                <input>
                    placeholder='Input the room name' value={roomname} onChange={(e) => setroomname(e.target.value)}
                </input>
                {/* Add third placeholder for password (option to remove) */}
                <input>
                    placeholder='Input Password'     
                </input>
                <Link to={`/chat/${roomname}/${username}`}>
                    <button onClick={sendData}>Join</button>
                </Link>
            </div>
        </div>
    );
}

export default Homepage;