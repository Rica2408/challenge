import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    background: '#000',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowContainer: {
    display: 'flex', 
    flexDirection:'row'
  },
  buttonLogOut: {
    borderLeftStyle: 'solid',
    borderColor: '#26FC29'
  },
  chartContainer: {
    width: '80%',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerChart: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectContainer: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center'
  },
  imageContainer: {
    display: 'flex',
    flexDirection:'row',
    width: '100%',
    alignItems: 'center'
  },
  line: {
    display: 'flex',
    width: '100%',
    background: '#26FC29',
    height: 5
  }
})