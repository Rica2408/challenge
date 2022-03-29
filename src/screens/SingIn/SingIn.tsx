import { Box, Button } from "@material-ui/core";
import { FC } from "react"
import { useAuth0 } from '@auth0/auth0-react'
import logo from '../../assets/img/descarga.png'
import { useStyles } from "./styles";

const SignIn: FC = () => {
  const { loginWithPopup } = useAuth0()
  const classes = useStyles()

  return(
    <Box data-testid="signIn" className={classes.container}>
      <Box className={classes.loaderContainer}>
        <img style={{width: 150, height: 150}} src={logo} alt="Logo" />
        <Button className={classes.button} onClick={() => loginWithPopup()}>Log in</Button>
      </Box>
    </Box>
  )
}

export default SignIn