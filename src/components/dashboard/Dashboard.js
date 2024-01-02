import React from "react";
import Login from '../login/Login';
import Logout from "../logout/Logout";
import Signup from "../signup/signup";


const Dashboard = (props) => {
    // const [token, setToken] = useState();

    // if (!props.token) {
    // window.location.href = '/Benoit-Gradel-Photographies.github.io/Admin';
    //     // return (
    //     //     <div>
    //     //         <Login setToken={props.setToken} />,
    //     //         {/* <Signup /> */}
    //     //     </div>
    //     // );
    // }

    return (
        <div>
            <h2>Dashboard</h2>
            <Signup />
            <Login setToken={props.setToken} />
            <Logout token={props.token} />
        </div>
    );
};

export default Dashboard;