import React, { useState } from "react";
import { Button, TextField, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

// function handleLogout() {
//   props.setEmail(null);
//props.setPassword(null);
//   localStorage.removeItem('email');
//   window.location = '/';
// }

//fazer grid
//mostrar email da pessoa
//esconder botao

{
  /* <div key={0}>
    <Button
    color="danger"
    block
    onClick={() => handleLogout()}
    >Logout</Button>
    </div>,
    <div key={1} ></div> */
}

export default function App(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("email", JSON.stringify(email));
  }

  return (
    <Grid container spacing={1}>
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
    </Grid>
  );
}
