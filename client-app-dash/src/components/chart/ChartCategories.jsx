import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryStatistics } from '../../features/statisticsCategorySlice';
import Chart from 'chart.js/auto';

function ChartCategories() {
  const dispatch = useDispatch();
  const categoryStatistics = useSelector((state) => state.CategoryStatistics);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    dispatch(getCategoryStatistics());
  }, [dispatch]);

  useEffect(() => {
    if (categoryStatistics && categoryStatistics.statistics) {
      const categoryNames = categoryStatistics.statistics.map((category) => category.name);
      const categoryCounts = categoryStatistics.statistics.map((category) => category.postCount);
      const backgroundColors = Array.from({ length: categoryNames.length }, () => '#' + Math.floor(Math.random() * 16777215).toString(16));

      const chartData = {
        labels: categoryNames,
        datasets: [
          {
            data: categoryCounts,
            backgroundColor: backgroundColors,
          },
        ],
      };

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: chartData,
      });
    }
  }, [categoryStatistics]);

  useEffect(() => {
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen" >
      <div className="rounded-lg shadow-md p-4 w-full max-w-md bg-white border-2 border-black">
        <h2 className="text-lg font-semibold mb-4 text-center text-black">Category Statistics Chart</h2>
        <div className="flex justify-center">
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
}

export default ChartCategories;
