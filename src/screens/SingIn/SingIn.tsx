import { Box, Button } from "@material-ui/core";
import { FC } from "react"
import { useAuth0 } from '@auth0/auth0-react'


const SignIn: FC = () => {
  const { loginWithPopup } = useAuth0()
  
  return(
    <Box>
      <Button onClick={() => loginWithPopup()}>Log in</Button>
    </Box>
  )
}

export default SignIn