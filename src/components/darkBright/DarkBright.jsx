import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import './darkBright.scss';


const DarkBright = (props) => {

    // const [dark, setDark] = useState(false);

    return (
        <div className={props.theme === "dark" ? "darkLight-button dark" : "darkLight-button light"
        }>
            {props.theme === "light" ?
                <FontAwesomeIcon
                    icon={faMoon}
                    onClick={() => { props.setTheme("dark") }}
                    className="darkLightIcon dark"
                    aria-label="thème foncé"
                /> :
                <FontAwesomeIcon
                    icon={faSun}
                    onClick={() => { props.setTheme("light") }}
                    className="darkLightIcon light"
                    aria-label="thème clair"
                />
            }
        </div>
    );
};

export default DarkBright;