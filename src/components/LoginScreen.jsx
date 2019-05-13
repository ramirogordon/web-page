import React, { useState } from 'react'
import Navbar from './Navbar';
import { TextField, Button, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../styles/LoginScreen.scss';

const styles = () => ({
    card: {
        width: "40%",
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
    const [data, setData] = useState({userName: '', password: ''});
    // const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        console.log(data);
    }

    const submit = info => {
        console.log(info);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const error = validate(data);
        setErrors(error);
        if (Object.keys(errors).length === 0) {
            submit(data);
        } else {
            window.alert('User Name or Password ' + errors.msgPassword)
        }
    }

    const validate = (data) => {
        let error = {};
        if (!data.userName) {
            error.msgUserName = "can't be blanck"
        }
        if(!data.password) {
            error.msgPassword = "can't be blanck"
        }
        return error;
    }

    const { classes } = props;
    return (
        <>
            <Navbar />
            <form className="form" onSubmit={onSubmit}>
                <Card className={classes.card}>
                    <div className="login" >
                        <Typography className={classes.typoTitle} gutterBottom variant="h5" component="h2">
                            User Login
                            <Typography className={classes.typoDescription} color="textSecondary">
                                Please enter your user name and your password below
                            </Typography>
                        </Typography>
                        <div className="full-text-field">
                            <div className="img-text-field">
                                <img src="https://png.pngtree.com/svg/20170224/82e34b948b.svg" alt="default_img"/>
                            </div>
                            <div className="data-text-field">
                                <TextField id="input-with-icon-grid"  label="User Name" name="userName" value={data.userName} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="full-text-field">
                            <div className="img-text-field">
                                <img src="https://png.pngtree.com/svg/20170224/82e34b938b.svg" alt="default_img"/>
                            </div>
                            <div className="data-text-field">
                                <TextField
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="full-text-field button">
                            <Button variant="contained" color="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </div>
                </Card>
            </form>
        </>
    )
}

export default withStyles(styles)(LoginScreen);
