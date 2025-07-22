import { useState, useEffect } from 'react';
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
  'UI/UX',
  'Database',
  'DevOps',
];

const skillLevels = [95, 90, 85, 80, 88, 75, 82, 70];

export const SkillRadar = () => {
  const [isLightMode, setIsLightMode] = useState(
    document.documentElement.classList.contains('light')
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLightMode(document.documentElement.classList.contains('light'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const data = {
    labels: skills,
    datasets: [
      {
        label: 'Skill Level',
        data: skillLevels,
        backgroundColor: isLightMode 
          ? 'rgba(34, 197, 94, 0.15)' 
          : 'rgba(0, 245, 255, 0.2)',
        borderColor: isLightMode 
          ? 'rgba(34, 197, 94, 0.8)' 
          : 'rgba(0, 245, 255, 0.8)',
        borderWidth: isLightMode ? 3 : 2,
        pointBackgroundColor: isLightMode ? 'rgba(34, 197, 94, 1)' : 'rgba(0, 245, 255, 1)',
        pointBorderColor: isLightMode ? 'rgba(255, 255, 255, 1)' : '#fff',
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 5,
        pointHoverBackgroundColor: isLightMode ? 'rgba(34, 197, 94, 1)' : '#fff',
        pointHoverBorderColor: isLightMode ? 'rgba(34, 197, 94, 1)' : 'rgba(0, 245, 255, 1)',
        pointHoverRadius: isMobile ? 6 : 8,
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
        backgroundColor: isLightMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)',
        titleColor: isLightMode ? 'rgba(34, 197, 94, 1)' : '#00f5ff',
        bodyColor: isLightMode ? 'rgba(0, 0, 0, 0.8)' : '#ffffff',
        borderColor: isLightMode ? 'rgba(34, 197, 94, 1)' : '#00f5ff',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: isLightMode 
            ? 'rgba(0, 0, 0, 0.3)' 
            : 'rgba(255, 255, 255, 0.2)',
          lineWidth: 1,
        },
        grid: {
          color: isLightMode 
            ? 'rgba(0, 0, 0, 0.2)' 
            : 'rgba(255, 255, 255, 0.15)',
          lineWidth: 1,
        },
        pointLabels: {
          color: isLightMode 
            ? 'rgba(0, 0, 0, 0.9)' 
            : 'rgba(255, 255, 255, 0.9)',
          font: {
            size: isMobile ? 9 : 11,
            weight: 600,
            family: 'Inter, sans-serif',
          },
          padding: isMobile ? 8 : 12,
        },
        ticks: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        backgroundColor: 'transparent',
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart' as const,
    },
  };

  return (
    <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-[280px] max-h-[280px] sm:max-w-[320px] sm:max-h-[320px] lg:max-w-[380px] lg:max-h-[380px]">
          <Radar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};