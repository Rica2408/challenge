import { ceil, max, min } from "lodash";
import { FC, useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import { CandlesProps, CharCandlesDataType } from "./types";
import { Box, Typography, Select, MenuItem  } from '@material-ui/core'
import { DataProps } from "../../../screens/Dashboards/types";

const Candles: FC<CandlesProps> = ({data}) => {
  const [candlesData, setCandlesData] = useState<CharCandlesDataType[]>([])
  const [interval, setInterval] = useState<number>(10)

  const transformToCandles = (data: DataProps[], time: number = 10): CharCandlesDataType[] => {
    const numberOfCandles = ceil(data.length / time)
    const arrayOfCandles: CharCandlesDataType[] = []
    let candle: number[] = []

    for (let i = 0; i < numberOfCandles; i++) {
      for (let y = 0; y < time; y++) {
        if (data[i * time + y]) {
          candle.push(data[i * time + y].price)
        }
      }
      const openCandle = candle[0]
      const closeCandle = candle[candle.length - 1]
      const highCangle = max(candle)
      const lowCandle = min(candle)
      arrayOfCandles.push({
        x: data[i].date,
        open: openCandle,
        close: closeCandle,
        high: highCangle,
        low: lowCandle,
        volume: data[i].volume
      }) 
      candle = []
    }
    
    return arrayOfCandles
  }

  const handlerInterval = (e: any): void => {
    setInterval(e.target.value);
  }

  useEffect(() => {
    const tranformData = transformToCandles(data, interval)
    setCandlesData(tranformData)
  }, [data, interval])

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      textStyle: {
        color: '#000'
      },
    },
    xAxis: [
      {
        data: candlesData.map(item => (item.x)),
      },
      {
        type: 'category',
        gridIndex: 1,
        axisPointer: {
          type: 'shadow',
          label: { show: false },
          triggerTooltip: true,
          handle: {
            show: true,
            margin: 300,
            color: '#B80C00'
          }
        }
      }
    ],
    yAxis: [
      {
        splitNumber: 2,
        scale: true,
        splitArea: {
          show: true
        },
        min: 39050
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false }
      }
    ],
    grid: [
      {
        left: 40,
        right: 20,
        top: 50,
        height: 120
      },
      {
        left: 20,
        right: 20,
        height: 40,
        top: 210
      }
    ],
    series: [
      {
        type: 'candlestick',
        data: candlesData.map(item => {
          return [item.open, item.close, item.low, item.high]
        }),
        itemStyle: {
          color: '#1FC222',
          color0: 'red',
          borderColor: '#1FC222',
          borderColor0: 'red'
        },
      },
      {
        name: 'Volume',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: '#1FC222'
        },
        emphasis: {
          itemStyle: {
            color: '#140'
          }
        },
        data: candlesData.map(item => item.volume)
      },
    ]
  };

  return (
    <Box>
      <Box style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Typography style={{marginRight: 10}}>Intervalos:</Typography>
        <Select
          id="interval"
          value={interval}
          label='interval'
          onChange={handlerInterval}
        >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        </Select>
      </Box>
      <ReactEcharts option={option} />
    </Box>
  )
}

export default Candles