
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
  const isLightMode = document.documentElement.classList.contains('light');
  
  const data = {
    labels: skills,
    datasets: [
      {
        label: 'Skill Level',
        data: skillLevels,
        backgroundColor: isLightMode 
          ? 'rgba(0, 245, 255, 0.3)' 
          : 'rgba(0, 245, 255, 0.2)',
        borderColor: isLightMode 
          ? 'rgba(0, 245, 255, 1)' 
          : 'rgba(0, 245, 255, 0.8)',
        borderWidth: isLightMode ? 3 : 2,
        pointBackgroundColor: 'rgba(0, 245, 255, 1)',
        pointBorderColor: isLightMode ? 'rgba(0, 0, 0, 0.3)' : '#fff',
        pointBorderWidth: 2,
        pointRadius: isLightMode ? 6 : 4,
        pointHoverBackgroundColor: isLightMode ? 'rgba(0, 245, 255, 1)' : '#fff',
        pointHoverBorderColor: 'rgba(0, 245, 255, 1)',
        pointHoverRadius: 8,
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
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        titleColor: '#00f5ff',
        bodyColor: '#ffffff',
        borderColor: '#00f5ff',
        borderWidth: 1,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: document.documentElement.classList.contains('light') 
            ? 'rgba(0, 0, 0, 0.2)' 
            : 'rgba(255, 255, 255, 0.2)',
        },
        grid: {
          color: document.documentElement.classList.contains('light') 
            ? 'rgba(0, 0, 0, 0.15)' 
            : 'rgba(255, 255, 255, 0.15)',
        },
        pointLabels: {
          color: document.documentElement.classList.contains('light') 
            ? 'rgba(0, 0, 0, 0.8)' 
            : '#ffffff',
          font: {
            size: window.innerWidth < 640 ? 10 : 12,
            weight: 'bold' as const,
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
    <div className="h-full w-full">
      <Radar data={data} options={options} />
    </div>
  );
};
