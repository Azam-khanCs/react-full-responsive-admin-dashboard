import './BarChartBox.scss'
import { BarChart, Bar,  Tooltip, ResponsiveContainer } from 'recharts';

type Props={
  title:string;
  color:string,
  dataKey:string,
  chartData:object[]

}

const BarChartBox = (props:Props) => {
  return (
    <div className='barChartBox'>
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
        <BarChart  data={props.chartData}>
          <Tooltip
          contentStyle={{background:"#2a3447", borderRadius:"5px"}}
          labelStyle={{display:"none"}}
          cursor={{fill:"none"}}
          // position={{ x: 20, y: 60 }} it is used to control its position
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
      </div>

    </div>
  )
}

export default BarChartBox