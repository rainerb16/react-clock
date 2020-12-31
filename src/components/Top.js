import React from 'react';
import '../components/Top.css';

class Top extends React.Component {
    render() {
        return (
            <div className="ui one column centered">
                <h1 className="clock-title">DIGI-REACT <span className="clock-word">CLOCK</span></h1>
            </div>
        );
    }
}

export default Top;