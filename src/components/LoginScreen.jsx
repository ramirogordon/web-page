import React from 'react'
import Navbar from './Navbar';
import { TextField, Button, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../styles/LoginScreen.scss';

const styles = () => ({
    card: {
        width: "30%",
    },
    typoTitle: {
        marginTop: "2rem"
    },
    typoDescription: {
        fontSize: 14,
        color: "textSecondary",
        margin: 10
    }
});

const LoginScreen = (props) => {
    const { classes } = props;
    return (
        <>
            <Navbar />
            <form className="form">
                <Card className={classes.card}>
                    <div className="login" >
                        <Typography className={classes.typoTitle} gutterBottom variant="h5" component="h2">
                            User Login
                        </Typography>
                        <Typography className={classes.typoDescription} color="textSecondary">
                            Please enter you user name and you password below
                        </Typography>
                        <div className="full-text-field">
                            <div className="img-text-field">
                                <img src="https://png.pngtree.com/svg/20170224/82e34b948b.svg" />
                            </div>
                            <div className="data-text-field">
                                <TextField id="input-with-icon-grid" label="User Name" />
                            </div>
                        </div>
                        <div className="full-text-field">
                            <div className="img-text-field">
                                <img src="https://png.pngtree.com/svg/20170224/82e34b938b.svg" />
                            </div>
                            <div className="data-text-field">
                                <TextField
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="0 auto"
                                />
                            </div>
                        </div>
                        <div className="full-text-field button">
                            <Button variant="contained" color="primary">
                                Primary
                            </Button>
                        </div>
                    </div>
                </Card>
            </form>
        </>
    )
}

export default withStyles(styles)(LoginScreen);
