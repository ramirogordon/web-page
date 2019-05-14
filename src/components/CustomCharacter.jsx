import React from 'react';
import Navbar from './Navbar';
import '../styles/CustomCharacter.scss';
import { TextField, Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const CustomCharacter = () => {
  const classes = useClasses();
  console.log(classes);
  return (
    <>
      <Navbar />
      <div className="custom-screen">
        <div className="custom-title">
          <h1>Custom your Character</h1>
        </div>
        <div className="custom-form">
          <form method="get">
            <div className="form-group">
              <div className="input-label">
                <TextField
                  className={classes.margin}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  label="Name Character"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
              </div>
              <div className="input-label">
                <TextField
                  className={classes.margin}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  label="Level"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-label">
                <TextField
                  className={classes.margin}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  label="Life"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
              </div>
              <div className="input-label">
                <TextField
                  className={classes.margin}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  label="Physical Armor"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-label">
                <TextField
                  className={classes.margin}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  label="Magica Armor"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
              </div>
              <div className="input-label">
                <TextField
                  className={classes.margin}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  label="Description"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
              </div>
            </div>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
          <div className="img-character">
            <img src="http://www.stickpng.com/assets/images/5905fcc20cbeef0acff9a625.png" alt="img1" />
          </div>
        </div>
      </div>
    </>
  )
}

const useClasses = () => {
  return ({
    margin: {
      margin: "1rem",
    },
    cssLabel: {
      '&$cssFocused': {
        color: purple,
      },
    },
    cssFocused: {},

    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: purple,
      },
    },
    notchedOutline: {},
  })
}

export default CustomCharacter
