import React from 'react';
import Form from '../../components/form/Form';
import './contact.scss';

const Contact = (props) => {

    // const [contactData, setContactData] = useState([]);
    // const getData = () => {
    //     setContactData(props.data);
    //     props.showNav(true);
    // }

    // useEffect(() => {
    //     getData();
    // })

    // if (contactData.length === 0) {
    //     return <>Still loading...</>;
    // }

    return (
        <main id='contact'>
            <h2
                className='contact__title'
                id={"contact title"}
                onClick={() => props.initData()}
            >
                {/* {contactData.titre} */}
                {props.findData("contact", "title")}

            </h2>
            <div className='contact__container'>
                <div
                    className='contact__intro'>
                    {/* {contactData.texte.map((texte, index) => (
                         <p
                            key={index}>
                            {texte}
                            {texte.search("<span>") !== undefined ? { texte } : ""}
                        </p>
                    ))} */}
                    {props.findData("contact", "text")[0].map((texte, index) => (
                        <p
                            id={"contact text"}
                            onClick={() => props.initData()}
                            key={index}>
                            {texte}
                        </p>
                    ))}
                </div>
                <Form
                    // data={contactData.cadres}
                    initData={props.initData}
                    findData={props.findData} />
            </div>
        </main>
    );
};

export default Contact;