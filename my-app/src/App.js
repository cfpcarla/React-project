import React, { useState } from "react";
import { Button, TextField, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  text: {
    padding: "20px",
  },
}));

const LogoutButton = ({ logoutFn }) => {
  return (
    <Box p="60px">
      <Button
        variant="button"
        size="large"
        width="60%"
        backgroundColor="#fcff4a"
        fullWidth
        block
        gutterBottom
        onClick={logoutFn}
      >
        Logout
      </Button>
    </Box>
  );
};

export default function App(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("login");

  function validateForm() {
    return email.length > 0 && password.length > 0 && validateEmail(email);
  }
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisplay("logout");
    localStorage.setItem("email", JSON.stringify(email));
  }

  return (
    <Grid container spacing={1}>
      <Box display={display === "login" ? "block" : "none"}>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="email"
            label="Email"
            defaultValue="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="pass"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Box p="60px">
            <Button
              variant="button"
              size="large"
              width="60%"
              backgroundColor="#fcff4a"
              fullWidth
              block
              gutterBottom
              className={classes.root}
              disabled={!validateForm(props)}
              type="submit"
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
      <Box display={display === "logout" ? "block" : "none"}>
        <Typography className={classes.text} variant="body5">
          You have successfully logged in as {email}
        </Typography>
        <LogoutButton
          logoutFn={() => {
            localStorage.removeItem("email");
            setEmail("");
            setPassword("");
            setDisplay("login");
          }}
        />
      </Box>
    </Grid>
  );
}
