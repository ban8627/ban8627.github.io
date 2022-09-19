window.onload = function () {
  AOS.init();

  const labels = [
    '책임감',
    '집중력',
    '팀워크',
    '끈기',
    '전문성'
  ];

  const data = {
    labels: labels,
    datasets: [{
      backgroundColor: 'rgb(255, 255, 255,0.7)',
      borderColor: 'rgb(0, 0, 0,0.5)',
      title: {
        display: false
      },
      data: [95, 90, 95, 100, 85],
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        pointBorderWidth: 5
      },
      scale: {
        min: 0,
        max: 100,
        suggestedMin: 0,
        suggestedMax: 100,
        stepSize: 5,
        maxTicksLimit: 10,
        ticks: {
          font: {
            size: 16
          }
        },
      },
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
};