import { createContext } from "react";

const UserContext = createContext({
    LoggedInuser: "Deafult name"
});

export default UserContext;