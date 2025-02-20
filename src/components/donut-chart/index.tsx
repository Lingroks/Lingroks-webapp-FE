// components/DonutChart.js
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
    positive: number;
    neutral: number;
    negative: number;
  }

  const DonutChart: React.FC<DonutChartProps> = ({ positive, neutral, negative }) => {
  const data = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        data: [positive, neutral, negative],
        backgroundColor: ['#4CAF50', '#FFEB3B', '#F44336'], // Green, Yellow, Red
        hoverBackgroundColor: ['#66BB6A', '#FFF176', '#EF5350'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Confidence Scores',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
