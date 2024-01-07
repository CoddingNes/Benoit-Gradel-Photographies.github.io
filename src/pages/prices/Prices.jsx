import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PriceTable from '../../components/priceTable/PriceTable';
import './prices.scss';

const Prices = (props) => {
    // const [priceData, setPriceData] = useState([]);
    const getData = () => {
        // setPriceData(props.data);
        props.showNav(true);
    }

    useEffect(() => {
        getData();
    })

    // if (priceData.length === 0) {
    //     return <>Still loading...</>;
    // }

    const nbOfTables = () => {
        let i = 0
        while (props.findData("price", 'table' + i + 'Header0')[0] !== 'no data') {
            i++
        }
        return i
    }

    return (
        <main>
            <h2
                id="price title"
                onClick={() => props.initData()}
            >
                {/* {priceData["title"]} */}
                {props.findData("price", "title")}
            </h2>
            {/* {priceData["text"].map((ligne, index) => (
                <p
                    id="price text"
                    onClick={() => props.initData()}
                    key={index}>
                    {ligne}
                </p>))} */}
            {/* {props.findData("price", "text")[0].map((ligne, index) => (
                <p
                    id="price text"
                    onClick={() => props.initData()}
                    key={index}>
                    {ligne}
                </p>))} */}
            {/* {priceData["tableau"].map((table, index) => ( */}
            {Array.from(
                { length: nbOfTables() },
                (_, i) => (
                    <PriceTable
                        key={i}
                        tableNb={i}
                        initData={props.initData}
                        findData={props.findData}
                        token={props.token}
                    // titles={table["titres"]}
                    // colspan={table["largeurTitre"]}
                    // lines={table["lignes"]}
                    // key={index}
                    />
                ))}

            {/* <PriceTable
                tableNb={1}
                initData={props.initData}
                findData={props.findData}
            // titles={table["titres"]}
            // colspan={table["largeurTitre"]}
            // lines={table["lignes"]}
            // key={index}
            /> */}
            {props.token ?
                <button
                    className='moreButton adminButton'
                    // eslint-disable-next-line
                    id={'price table' + nbOfTables() + 'Header0' + ' table'}
                    onClick={() => props.initData()}
                >
                    Ajouter un tableau</button>
                : null}


            {/* ))} */}
            {/* {props.findData("price", "table")[0].map((table, index) => (
                <PriceTable
                    iniData={props.initData}
                    titles={table["titres"]}
                    colspan={table["largeurTitre"]}
                    lines={table["lignes"]}
                    key={index}
                />
            ))} */}
            <p
                id="price linkText"
                onClick={() => props.initData()}
            >
                {/* {priceData["link"]["text"] + " "} */}
                {props.findData("price", "linkText")[0]}
                <NavLink
                    id="price link"
                    onClick={() => props.initData()}
                    to='../../contact'
                    className='home__link__contact link-style hover__anim'>
                    {/* {priceData["link"]["link"]} */}
                    {props.findData("price", "link")}
                </NavLink>
            </p>
            <div
                id="price note"
                onClick={() => props.initData()}
                className='notes__box'>
                {/* {priceData["notes"]["text"].map((note, index) => (
                    <p
                        id="price note"
                        onClick={() => props.initData()}
                        key={index} >
                        {note}
                    </p>
                ))} */}
                {props.findData("price", "note")[0].map((note, index) => (
                    <p
                        id="price note"
                        onClick={() => props.initData()}
                        key={index} >
                        {note}
                    </p>
                ))}

            </div>
        </main>
    );
};

export default Prices;