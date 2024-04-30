import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatistics } from '../../features/statisticsPostSlice';
import Chart from 'chart.js/auto';

const ChartPosts = () => {
  const dispatch = useDispatch();
  const statistics = useSelector((state) => state.PostStatistics);
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  useEffect(() => {
    if (statistics.statistics) {
      const newChartData = {
        labels: statistics.statistics.map((stat) => stat.date),
        datasets: [
          {
            label: 'Number of Posts',
            data: statistics.statistics.map((stat) => stat.count),
            backgroundColor: 'rgba(144, 238, 144, 0.2)', 
            borderColor: 'rgba(0, 0, 0, 1)', 
            borderWidth: 2,
          },
        ],
      };

      setChartData(newChartData);
    }
  }, [statistics.statistics]);

  useEffect(() => {
    if (chartData.labels && chartData.datasets) {
      if (!chartRef.current) {
        chartRef.current = new Chart(document.getElementById('chart'), {
          type: 'line',
          data: chartData,
        });
      } else {
        chartRef.current.data = chartData;
        chartRef.current.update();
      }
    }
  }, [chartData]);

  return (
    <div
      className='flex justify-center items-center h-screen'
      
    >
      <div
        className='rounded-lg shadow-md p-4 w-full max-w-md'
        style={{
          backgroundColor: '#fff', 
          border: '2px solid #000', 
        }}
      >
        <h2
          className='text-lg font-semibold mb-4 text-center'
          style={{ color: '#000' }} 
        >
          Post Statistics Chart
        </h2>
        <div className='flex justify-center'>
          <canvas id='chart' />
        </div>
      </div>
    </div>
  );
};

export default ChartPosts;