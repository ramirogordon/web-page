import React from 'react'
import '../styles/TableAbilities.scss';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const style = () => ({
    root: {
        widht: '100%',
        overFlowX: 'auto',
    }
})

const TableAbilities = (props) => {
    const {abilities, classes} = props;
    let tableBody = abilities.map((ability, i) => {
        return(
            <tr key={i}>
                <td align="right">{ability.name}</td>
                <td align="right">{ability.description}</td>
                <td align="right">{ability.cost}</td>
                <td align="right">{ability.cd}</td>
            </tr>
        )
    })
    return (
        <div className="full-table">
            <Paper className={classes.root}>
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
            </Paper>
        </div>
    )
}

export default withStyles(style)(TableAbilities);
