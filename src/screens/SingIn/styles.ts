import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loaderContainer: {
    borderRadius: 8,
    width: 300,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderStyle: 'solid'
  },
  button: {
    background: '#000',
    color: '#FFF'
  }
})