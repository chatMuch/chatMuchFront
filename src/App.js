import Chat from "./chat/chat.js";
import Process from "./process/process";
import Home from "./home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import React from 'react';
import io from "socket.io-client";
// import Navbar from 'react-bootstrap/Navbar'
const socket = io.connect('http://localhost:3000/chat')


function Appmain(props) {
  return (
    <React.Fragment>
  
    <div className="left"> 
    <Process style={{background:"black", opacity: "70%"}}/> 
    </div> 
    <div className="right">

<Chat 
username={props.match.params.username}
roomname={props.match.params.roomname}
socket={socket}
/>
</div>
    </React.Fragment>
  );
}
function App() {
  return (
    <Router>
      <div  className="App">
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomname/:username" component={Appmain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



