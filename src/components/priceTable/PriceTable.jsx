import React from 'react';

const PriceTable = (props) => {

    const nbOfLines = () => {
        let i = 0
        while (props.findData('price', 'table' + props.tableNb + 'Lines' + i)[0] !== 'no data') {
            i++
        }
        return i
    }

    const display = (i) => {
        const title = props.findData('price', 'table' + props.tableNb + 'Header0')
        if (title[0][i]) {
            return <th
                id={'price table' + props.tableNb + 'Header0 table'}
                onClick={() => props.initData()}
                // key={i}
                colSpan={title[1][i]}>
                {title[0][i]}
            </th>
        }
    }

    const displayLines = (j) => {
        const linesList = []
        if (props.findData('price', 'table' + props.tableNb + 'Lines' + [j])[0] !== 'no data') {
            const lines = props.findData('price', 'table' + props.tableNb + 'Lines' + [j])
            linesList.push(lines[0])
            const data = []
            for (let i = 0; i < lines[0].length; i++) {
                data.push(<td
                    id={'price table' + props.tableNb + 'Lines' + [j] + ' table'}
                    onClick={() => props.initData()}
                    key={i}
                    colSpan={lines[1][i]}>
                    {lines[0][i]}
                </td>
                );
            }
            return (
                <tr>{data}</tr>
            )
        }
    }

    return (
        <div>
            <table
                id='priceTable__table'
                key={props.key}>
                <thead>
                    <tr>
                        {/* {props.titles.map((title, index) =>
                    <th
                        id={props.id}
                        key={index}
                        colspan={title[1]}>
                        {title[0]}
                    </th>
                )} */}
                        {Array.from(
                            { length: 10 },
                            (_, i) => (
                                display(i)
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {/*      {props.lines.map((line) => (
                 <tr>
                     {line.map((line, index) => (
                         <td
                             // id={'price lignes' + [i] + ' table'}
                             // onClick={() => props.initData()}
                             key={index}
                             colspan={line[1]}>
                             {line[0]}
                         </td>)
                     )}
                // </tr>
             ))}*/}
                    {Array.from(
                        { length: 30 },
                        (_, j) => (
                            displayLines(j)
                        ))}
                    {/* {Array.from(
                    { length: 10 },
                    (_, i) => (
                        displayOneLine(i)
                    ))} */}
                </tbody>
            </table>
            {props.token ?
                <button
                    className='moreButton adminButton'
                    id={'price table' + props.tableNb + 'Lines' + nbOfLines() + ' table'}
                    onClick={() => props.initData()}
                >
                    ajouter une ligne au tableau</button>
                : null
            }
        </div>
    );
};

export default PriceTable;