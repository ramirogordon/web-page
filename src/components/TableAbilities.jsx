import React from 'react'
import '../styles/TableAbilities.scss';

const TableAbilities = (props) => {
    const abilities = props.abilities;
    let tableBody = abilities.map((ability, i) => {
        return(
            <tr key={i}>
                <td>{ability.name}</td>
                <td>{ability.description}</td>
                <td>{ability.cost}</td>
                <td>{ability.cd}</td>
            </tr>
        )
    })
    return (
        <div className="full-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>CD</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        </div>
    )
}

export default TableAbilities
