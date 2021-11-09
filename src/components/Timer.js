
import { useState, Component } from "react";



class MyTimer extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state={time:Number(this.props.start)};
    };

componentDidMount(){
    var timer = setInterval(() => {
        console.log(this.props);;
        this.setState({time: this.state.time+1});
        console.log(this.state.time);
        if (this.state.time == 0) {
            clearInterval(timer);
        }
    }, 1000);
};

    render() {
        return (
            <div>
                <pre>{this.state.time}</pre>
            </div>
        )
    }
};

export default MyTimer;