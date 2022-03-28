import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
  loaderContainer: {
    borderRadius: 8,
    width: 300,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderStyle: 'solid'
  }
})