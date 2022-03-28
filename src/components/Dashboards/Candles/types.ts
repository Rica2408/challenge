import { DataProps } from "../../../screens/Dashboards/types"

export type CandlesProps = {
    data: DataProps[]
}

export  type CharCandlesDataType = {
    x: string,
    open: number,
    close: number,
    high: number | undefined,
    low: number | undefined,
    volume: number
}