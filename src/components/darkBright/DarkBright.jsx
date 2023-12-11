import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import './darkBright.scss';


const DarkBright = (props) => {

    // const [dark, setDark] = useState(false);

    return (
        <div className={props.theme === "dark" ? "darkBright-button dark" : "darkBright-button bright"
        }>
            {props.theme === "light" ?
                <FontAwesomeIcon icon={faMoon}
                    onClick={() => { props.setTheme("dark") }}
                    className="darkBrightIcon"
                /> :
                <FontAwesomeIcon icon={faSun}
                    onClick={() => { props.setTheme("light") }}
                    className="darkBrightIcon"
                />
            }
        </div>
    );
};

export default DarkBright;