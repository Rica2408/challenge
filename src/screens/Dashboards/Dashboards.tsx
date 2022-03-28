import { ChangeEvent, FC, useEffect, useState } from 'react'
import axios from 'axios'
import { DataProps } from './types'
import { Box, Button, Typography, Select, MenuItem  } from '@material-ui/core'
import { useAuth0 } from '@auth0/auth0-react'
import { uniqBy } from 'lodash'
import Candles from '../../components/Dashboards/Candles'
import Lines from '../../components/Dashboards/Lines'
import logo from '../../assets/img/descarga.png'
import { useStyles } from './styles'

const Dashboards: FC = () => {
  const classes = useStyles()
  const [data, setData] = useState<DataProps[]>([])
  const [role, setRole] = useState<string[]>()
  const [chartType, setChartType] = useState('line')

  const { logout, user, getAccessTokenSilently } = useAuth0()

  //filter by second
  const filterByTime = (data: DataProps[]): DataProps[] => {
    const filterData = uniqBy(data, 'date')
    return filterData
  }

  //convert the date, get the until seconds
  const transformDateData = (data: DataProps[]): DataProps[] => {
    const newDateDate: DataProps[] = data.map(item => {
      const auxCompleteDate = item.date.split('T')
      const time = auxCompleteDate[1] 
      const transformDate = `${auxCompleteDate[0]}-${time.charAt(0)}${time.charAt(1)}-${time.charAt(3)}${time.charAt(4)}`

      return {
        ...item,
        date: transformDate
      }
    })

    return filterByTime(newDateDate)
  }

  const getData = async() => {
    const token = await getAccessTokenSilently()
    //get information of api of authO
    const getRole = await axios.get('http://localhost:4000/', {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    setRole(getRole.data)

    //get data of action
    const res = await axios.get('https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e')
   
    const data = transformDateData(res.data)
    
    setData(data)
  }

  const handlerTypeChart = (e: any): void => {
    setChartType(e.target.value);
  }

  const handlerShowChart = (value: string, data: DataProps[]) => {
    switch(value){
      case 'line':
        return <Lines data={data} />
      case 'candle':
        return <Candles data={data} />
    }
  }

  useEffect(() => {
    if (data.length === 0) {
      getData()    
    }
  },[])

  return(
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Box className={classes.rowContainer}>
          <Typography style={{color: '#26FC29', fontWeight: 'bold', fontSize: 40, marginLeft: 20}}>BIENVENIDO</Typography>
          <Typography style={{color: '#FFF', fontWeight: 'bold', fontSize: 40}}>{user?.nickname?.toUpperCase()}</Typography>
        </Box>
        <Box className={classes.rowContainer}>
          <Typography style={{color: '#FFF'}}>Role:</Typography>
          <Typography style={{color: '#FFF', fontWeight: 'bold', marginLeft: 5}}>{role}</Typography>
        </Box>
        <Typography>Indice de precios y cotizaciones</Typography>
        <Box className={classes.buttonLogOut}>
          <Button style={{color: '#FFF'}} onClick={() => logout()}>logout</Button>
        </Box>
      </Box>
      <Box className={classes.chartContainer}>
        <Box className={classes.centerChart}>
          <Typography style={{fontWeight: 'bold', fontSize: 30}}>Índice dePrecios y Cotizaciones</Typography>
          {role?.some(x => x === 'admin') ? 
            <Box className={classes.selectContainer}>
              <Typography style={{marginRight: 10}}>Tipo de grafica:</Typography>
              <Select
                id="typeChart"
                value={chartType}
                label='Type Chart'
                onChange={handlerTypeChart}
              >
                <MenuItem value={'line'}>Line</MenuItem>
                <MenuItem value={'candle'}>Candle</MenuItem>
              </Select>
            </Box> : <></>
          }
          <Box>
            {handlerShowChart(chartType, data)}        
          </Box>
        </Box>
      </Box>
      <Box className={classes.imageContainer}>
        <img style={{width: 150, height: 150}} src={logo} alt="Logo"  />
        <Box className={classes.line} />
      </Box>
    </Box>  
  )
} 

export default Dashboards