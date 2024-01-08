import React from "react";
import Login from '../login/Login';
import Signup from "../signup/signup";
import Logout from "../logout/Logout";
import "./dashboard.scss";


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
        <main id="dashboard">
            <h2>Dashboard</h2>
            <p>Bonjour,</p>
            <p>Tu viens d'accéder au mode administrateur.</p>
            <p>Déplace-toi sur le site normalement, et utilise ctrl+clic sur un élément pour entrer dans le formulaire de modification de cet élément.</p>
            <p>Les boutons <button className="adminButton" title="Je suis un exemple">exemple</button>, n'apparaissent que dans ce mode et te permettent d'effectuer des opérations sur le site.</p>
            <p>Clique sur "logout", en haut, pour te déconnecter</p>
            <p>Bonne visite !</p>
            <Login setToken={props.setToken} />
            {props.token ? <Signup /> : null}
        </main>
    );
};

export default Dashboard;