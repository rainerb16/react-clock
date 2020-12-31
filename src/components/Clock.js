import React from 'react';
import '../components/Clock.css';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
        <div className="clock-container">
            {this.props.isPrecise
            ? this.state.date.toISOString()
            : this.state.date.toLocaleTimeString()}
        </div>
        );
    }
    componentDidMount() {
        const oneSecond = 1000;
        this.intervalID = setInterval(() => {
            this.setState({ date: new Date() });
        }, oneSecond);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
}

export default Clock;