import React from 'react';

import './table.scss';

function Table(props) {
    const bordered = props.bordered ? ' table-bordered' : '';
    const borderless = props.borderless ? ' table-borderless' : '';
    const striped = props.striped ? ' table-striped' : '';
    const hovered = props.hovered ? ' table-hovered' : '';

    return (
        <table className={`table${bordered}${borderless}${striped}${hovered}`}>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tfoot>
        </table>
    );
}

Table.defaultProps = {
    bordered: '',
    borderless: '',
    striped: '',
    hovered: ''
};

export default Table;