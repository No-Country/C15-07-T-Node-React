import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/**
 * Component for Score Chart
 * @param {object} data
 * @returns Recharts Pie Chart with user score
 */
export default function OccupationChart({ data }) {
  const todayScore = data;
  const percent = todayScore * 100;
  const rest = 100 - percent;

  const score = [
    { name: 'objective', value: percent, fillColor: 'red' },
    { name: 'objective pending', value: rest, fillColor: 'white' },
  ];
  const scoreLabel = score[0].value ? `${score[0].value}%` : '0%';
  const initialData = [{ name: 'Score', value: 100 }];
  return (
    <div className='relative flex h-full flex-nowrap justify-center'>
      <div className='bottom-8 flex flex-col flex-nowrap items-center'>
        <p className='score_label'>{scoreLabel}</p>
      </div>

      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie data={initialData} dataKey='initialData' />
          <Pie
            data={score}
            innerRadius={60}
            outerRadius={70}
            startAngle={180}
            endAngle={-360}
            dataKey='value'
          >
            {score.map((base, index) => (
              <Cell
                key={`progress-${index}`}
                fill={base.fillColor}
                cornerRadius='50%'
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

OccupationChart.propTypes = {
  /**
   * User Score
   */
  data: PropTypes.number,
};
