import React, { useState } from 'react'
import Navbar from './Navbar';
import { TextField, Button, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../styles/LoginScreen.scss';


const LoginScreen = (props) => {
    const data = useFormInput({ userName: '', password: '' });
    const [errors, setErrors] = useState('');
    // const [loading, setLoading] = useState(false);



    const submit = info => {
        console.log(info);
    }

    const onSubmit = (e) => {
        const error = validate(data);
        if (!error) {
            submit(data);
        } else {
            e.preventDefault();
            setErrors(error);
        }

    }

    const validate = (data) => {
        let error;
        if (!data.user.userName || !data.user.password) {
            error = "can't be blanck";
        }
        return error;
    }

    const { classes } = props;
    return (
        <>
            <Navbar />
            <div className="login-screen">
                <form method="get" action="/" onSubmit={onSubmit}>
                    <Card className={classes.card}>
                        <div className="login" >
                            <Typography className={classes.typoTitle} gutterBottom variant="h5" component="h2">
                                User Login
                                <Typography className={classes.typoDescription} color="textSecondary">
                                    Please enter your user name and your password below
                                </Typography>
                            </Typography>
                            {errors && "The fields can't be blanck"}
                            <div className="full-text-field">
                                <div className="img-text-field">
                                    <img src="https://png.pngtree.com/svg/20170224/82e34b948b.svg" alt="default_img" />
                                </div>
                                <div className="data-text-field">
                                    <TextField id="input-with-icon-grid" label="User Name" name="userName" value={data.userName} onChange={data.onChange} />
                                </div>
                            </div>
                            <div className="full-text-field">
                                <div className="img-text-field">
                                    <img src="https://png.pngtree.com/svg/20170224/82e34b938b.svg" alt="default_img" />
                                </div>
                                <div className="data-text-field">
                                    <TextField
                                        id="standard-password-input"
                                        label="Password"
                                        type="password"
                                        name="password"
                                        autoComplete="current-password"
                                        onChange={data.onChange}
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
                <Card className={classes.cardData}>
                    <div className="user-name">
                        <Typography color="textSecondary" variant="h4" component="h4">
                            User Name
                        </Typography>
                        <Typography variant="h4" component="h5">
                            {data.user.userName}
                        </Typography>
                    </div>
                    <div className="user-pass">
                        <Typography color="textSecondary" variant="h4" component="h4">
                            Password
                        </Typography>
                        <Typography variant="h4" component="h6">
                            {data.user.password}
                        </Typography>
                    </div>
                </Card>
            </div>
        </>
    )
};

const useFormInput = (initialData) => {
    const [user, setUser] = useState(initialData);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return {
        user,
        onChange: handleChange
    }
};

const styles = () => ({
    card: {
        width: "100%",
    },
    typoTitle: {
        marginTop: "2rem"
    },
    typoDescription: {
        fontSize: 14,
        color: "textSecondary",
        margin: 10
    },
    cardData: {
        height: "45%",
        width: "24%",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center"
    }
});


export default withStyles(styles)(LoginScreen);
