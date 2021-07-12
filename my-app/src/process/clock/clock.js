import React  from 'react';
import Clock from 'react-live-clock';

class MyClock extends React.Component {
    render() {
        return(

            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        )
    }
}

module.exports = MyClock;