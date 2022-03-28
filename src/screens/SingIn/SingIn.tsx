import { Box, Button } from "@material-ui/core";
import { FC } from "react"
import { useAuth0 } from '@auth0/auth0-react'
import logo from '../../assets/img/descarga.png'
import { useStyles } from "./styles";

const SignIn: FC = () => {
  const { loginWithPopup } = useAuth0()
  const classes = useStyles()

  return(
    <Box style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box className={classes.loaderContainer}>
        <img style={{width: 150, height: 150}} src={logo} alt="Logo" />
        <Button style={{background: '#000', color: '#FFF'}} onClick={() => loginWithPopup()}>Log in</Button>
      </Box>
    </Box>
  )
}

export default SignIn