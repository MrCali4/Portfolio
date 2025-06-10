
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'TypeScript',
  'UI/UX Design',
  'Database Design',
  'DevOps',
];

const skillLevels = [95, 90, 85, 80, 88, 75, 82, 70];

export const SkillRadar = () => {
  const data = {
    labels: skills,
    datasets: [
      {
        label: 'Skill Level',
        data: skillLevels,
        backgroundColor: 'rgba(0, 245, 255, 0.2)',
        borderColor: 'rgba(0, 245, 255, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(0, 245, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 245, 255, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#00f5ff',
        bodyColor: '#ffffff',
        borderColor: '#00f5ff',
        borderWidth: 1,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: '#ffffff',
          font: {
            size: 12,
          },
        },
        ticks: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="h-80 w-full">
      <Radar data={data} options={options} />
    </div>
  );
};
