import React from "react";
import UserClass from "./UserClass";
import UserContext from "../../components/Context/useContext";


class About extends React.Component {
    constructor(props) {
        super(props)
        console.log('Parent constructor');
    }

    componentDidMount() {
        // console.log("parent did mount")

    }

    render() {
        // console.log("parent render")
        return (
            <div>
                <div>
                    LoggedIn user
                    <UserContext.Consumer>
                        {({ LoggedInuser }) => (
                            <h2 className="text-md">{LoggedInuser}</h2>
                        )}
                    </UserContext.Consumer>
                </div>
                <div>
                    <UserClass name={"Anand"} location={"Gadag"} />
                </div>

            </div>
        );
    }
}

export default About;