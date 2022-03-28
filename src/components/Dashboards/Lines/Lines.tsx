import { FC, useEffect, useState } from "react";
import { DataProps } from "../../../screens/Dashboards/types";
import { LinesProps, ChartDataType } from "./types";
import ReactEcharts from "echarts-for-react";

const Lines: FC<LinesProps> = ({data}) => {
  const [lineData, setLineData] = useState<ChartDataType[]>([])

  const option = {
    xAxis: {
      type: 'category',
      data: lineData.map(x => x.x)
    },
    yAxis: {
      type: 'value',
      min: 39050
    },
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
    series: [
      {
        data: lineData.map(data => data.y),
        type: 'line',
        itemStyle: {
          color: '#1FC222',
        },
      }
    ]
  }

  useEffect(() => {
    const chartData: ChartDataType[] = data.map((x: DataProps) : ChartDataType => {
      return {
        x: x.date,
        y: x.price,
      }
    })

    setLineData(chartData)
  }, [data])
  
  return(
    <ReactEcharts option={option} />
  )
}

export default Lines