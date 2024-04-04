import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { selectSortedTransactions } from 'reduxConfig/transactions/selectors'; // Modificarea numelui selectorului

function generateRandomColor() {
  // Generăm culori aleatoare în format hexadecimal
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function StatisticsPage() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const transactions = useSelector(selectSortedTransactions); // Folosirea noului selector

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext('2d');

    // Generăm culori aleatoare pentru fiecare categorie
    const backgroundColors = transactions.map(() => generateRandomColor());

    chartInstance.current = new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        labels: transactions.map(transaction => transaction.categoryId), // Folosirea numelor de categorie în loc de ID-uri
        datasets: [
          {
            backgroundColor: backgroundColors,
            data: transactions.map(transaction => transaction.amount),
          },
        ],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [transactions]);

  return <canvas ref={chartRef} />;
}

export default StatisticsPage;
