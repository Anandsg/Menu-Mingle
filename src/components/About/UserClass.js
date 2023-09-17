import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
        console.log("child constuctor");
    }
    componentDidMount() {
        console.log("child component did mount");
    }

    render() {
        console.log('child render')
        return (
            <div>
                <h3>count {this.state.count}</h3>
                <h2>{this.props.name}</h2>
                <h3>state: KA class</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>increase</button>
            </div>
        )
    };
};

export default UserClass;
