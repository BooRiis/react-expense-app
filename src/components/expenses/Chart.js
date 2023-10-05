import './Chart.css';
import ChartBar from './chart-bar/ChartBar';

function Chart(props) {
  const dataPointsValues = props.dataPoints.map(v => v.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
      ))}
    </div>
  );
}

export default Chart;
