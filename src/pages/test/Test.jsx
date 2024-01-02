import React, { useState } from 'react';
import Data from './testtext.json';

//Tester des trucs
const Test = () => {

    const data = Data.titre.contenu;
    const [element, setElement] = useState(data)
    const [previous, setPrevious] = useState();
    // const [text, setText] = useState()

    const truc = () => {
        console.log(previous);
        let text = prompt('Indique le texte de remplacement ici', data)
        if (text != null) {
            setElement(text);
            setPrevious(element);
        }
    }

    return (
        <div>
            <button id='button__test' className="bouton" onClick={() => (truc())} >
                {element}
            </button>
            {previous !== undefined && previous !== element ?
                <div onClick={() => (setElement(previous))} >précédent</div> :
                ""
            }
        </div>
    );
};

export default Test;