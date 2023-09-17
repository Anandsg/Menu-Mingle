import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h3>This is About us page</h3>
            <User name={"Anand functional comp"} />
            <UserClass name={"Anand class comp"} />
        </div>
    );
};

export default About;