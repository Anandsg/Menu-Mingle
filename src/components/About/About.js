import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log('Parent constructor');
    }

    componentDidMount() {
        console.log("parent did mount")
    }

    render() {
        console.log("parent render")
        return (
            <div>
                <h3>This is About us page</h3>
                <User name={"Anand functional comp"} />
                <UserClass name={"Anand class comp"} />
            </div>
        );
    }
}

export default About;