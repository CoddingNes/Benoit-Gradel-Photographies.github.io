import React from "react";
import Login from '../login/Login';
import Logout from "../logout/Logout";

const Dashboard = (props) => {
    // const [token, setToken] = useState();

    if (!props.token) {
        return <Login setToken={props.setToken} />
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <Logout />
        </div>
    );
};

export default Dashboard;