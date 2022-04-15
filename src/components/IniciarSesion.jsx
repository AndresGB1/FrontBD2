import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainBar from "./TopBar";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/"></Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const send = () => {
    axios
      .post(process.env.REACT_APP_ENDPOINT + "/token", {
        username: username,
        password: password,
      })
      .then((res) => {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("token", res.data.access_token);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Usuario o contraseña incorrectos");
      });
  };

  return (
    <div className="App-header">
      <div style={{ paddingTop: "5%" }}>
        <ThemeProvider theme={theme}>
          <MainBar color="#110023" />
          {sessionStorage.getItem("token") == null ? (
            <Container
              component="main"
              maxWidth="xs"
              sx={{ backgroundColor: "white", borderRadius: "4%" }}
            >
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Iniciar sesión
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Nombre de usuario"
                    value={username}
                    name="username"
                    autoComplete="username"
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="contraseña"
                    label="Contraseña"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => send()}
                    
                  >
                    Iniciar sesión
                  </Button>
                </Box>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          ) : (
            <Container
              component="main"
              maxWidth="xs"
              sx={{ backgroundColor: "white", borderRadius: "4%" }}
            >
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" color="black">
                  You are logged in.
                </Typography>
                <Typography component="h1" variant="h5" color="black">
                  {sessionStorage.getItem("username")}
                </Typography>
                <Typography component="h1" variant="h5" color="black">
                do you want to log out?
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => {
                      sessionStorage.removeItem("token");
                      sessionStorage.removeItem("username");
                      window.location.reload();
                    }}
                  >
                    Log out
                  </Button>
                </Box>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          )}
        </ThemeProvider>
      </div>
    </div>
  );
}
