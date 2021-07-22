import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

import {
  TextField,
  Grid,
  Button,
  Paper,
  Card,
  CardContent,
  CardActions,
  Container,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    //   email , password
    try {
      await login(email, password);
      props.history.push("/"); //navigate to /
    } catch (err) {
      setMessage(err.message);
      setEmail("");
      setPassword("");
    }
  };

  let useStyles = makeStyles({
    centerDivs: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      width: "100vw",
    },
    carousal: { height: "10rem", backgroundColor: "lightgray" },
    fullWidth: {
      width: "100%",
    },
    centerElements: {
      display: "flex",
      flexDirection: "column",
    },
    mb: {
      marginBottom: "1rem",
    },
    padding: {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
    alignCenter: {
      justifyContent: "center",
    },
  });
  let classes = useStyles();

  return (
    <div>
      <Container>
        <Grid container spacing={2} style={{justifyContent:"space-around"}}>
          {/* Carousel */}
          <Grid item xs={8} sm={5}>
            <Paper className={classes.carousal}>Carousel</Paper>
          </Grid>
          <Grid item  xs={8} sm={5} spacing ={3} >
            <Card variant="outlined" className={classes.mb}>
              <CardMedia
               image="https://t4.ftcdn.net/jpg/03/54/98/47/360_F_354984781_y61LJvrAl1bL0c8DkisoEhtQHQFyOv2C.jpg"
                style={{ height: "5rem", backgroundSize: "contain" }}
              ></CardMedia>
              <CardContent className={classes.centerElements}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={email}
                  size="small"
                  onChange={(e) => setEmail(e.target.value)}
                  className = {classes.mb}
                ></TextField>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  size="small"
                  onChange={(e) => setPassword(e.target.value)}
                  className = {classes.mb}
                ></TextField>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  className={classes.fullWidth}
                >
                  Login
                </Button>
              </CardActions>
            </Card>
            <Card variant="outlined" className={classes.padding}>
              <Typography style={{ textAlign: "center" }}>
                Don't have an account ?
                <Button variant="contained" color="primary">
                  <Link style={{ color: "white" }} to="/signup">
                    SignUp
                  </Link>
                </Button>
              </Typography>
           
            </Card>
            <h2 style={{ color: "red" }}>{message}</h2>
          </Grid>
        </Grid>
      </Container>
      {/* <h1>Login Page</h1>
      <div>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div>
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button onClick={handleLogin}>Login</button>
      <h2 style={{ color: "red" }}>{message}</h2>{" "} */}
    </div>
  );
};

export default Login;