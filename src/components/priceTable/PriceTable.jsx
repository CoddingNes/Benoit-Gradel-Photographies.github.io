import React from 'react';

const PriceTable = (props) => {
    return (
        <table
            key={props.key}>
            <tr>
                {props.titles.map((title, index) =>
                    <th key={index} colspan={title[1]}>
                        {title[0]}
                    </th>
                )}
            </tr>
            {props.lines.map((line) => (
                <tr>
                    {line.map((line, index) => (
                        <td key={index} colspan={line[1]}>
                            {line[0]}
                        </td>)
                    )}
                </tr>
            ))}
        </table>
    );
};

export default PriceTable;