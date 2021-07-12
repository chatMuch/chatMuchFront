import "./process.scss";
import { useSelector } from "react-redux";
import Clock from 'react-live-clock';


function Process() {
  // returns new state from the reducers
  // const state = useSelector((state) => state.ProcessReducer);

  return (
    <div className="process">
      <div>
      <Clock className="clock" style={{opacity:"90%", color: "red", borderRadius: "40%", background: "black", fontSize: "70px"}} format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
      </div>
      <div>
        <h1 className="sampleHeading" style={{position: "center", opacity: "80%", background: "black", color: "green"}} >This is where the CRM APPlication will be at....................
        .............................
        ...1111111111111....
        ...........11..11...
        ...........11..11....
        ...........111111....
        ....................
        ...111111111111111.....
        ...11...........11..
        ...11...........11.......
        ...111111111111111.
        ...........................
        ...1111111111111111..
        ...11............11...........
        ...1111111111111111...........
        ....................
        </h1>
      </div>
      {/* this is secret key will be used in aes.js for encryption and decryption.
      <h5>
        AES-256 Secret Key : <span>"uI2ooxtwHeI6q69PS98fx9SWVGbpQohO"</span>
      </h5>
      <div className="incoming">
        <h4>Incoming Encrypted Message</h4>
        <p>{state.cypher}</p>
      </div>
      <div className="crypt">
        <h4>Decypted Message</h4>
        <p>{state.text}</p>
      </div> */}
    </div>
  );
}
export default Process;