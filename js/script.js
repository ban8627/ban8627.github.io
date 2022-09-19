window.onload = function () {
  AOS.init();

  const labels = [
<<<<<<< HEAD
    '성실',
    '도전',
    '협력',
    '집중',
    '이해',
    '책임',
=======
    '책임감',
    '집중력',
    '팀워크',
    '끈기',
    '전문성'
>>>>>>> 3e8e698f7a02f4bf6ecdee33852803b287ac334c
  ];

  const data = {
    labels: labels,
    datasets: [{
<<<<<<< HEAD
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [9, 8, 7, 8, 8, 10],
=======
      backgroundColor: 'rgb(255, 255, 255,0.7)',
      borderColor: 'rgb(0, 0, 0,0.5)',
      title: {
        display: false
      },
      data: [95, 90, 95, 100, 85],
>>>>>>> 3e8e698f7a02f4bf6ecdee33852803b287ac334c
    }]
  };

  const config = {
    type: 'radar',
    data: data,
<<<<<<< HEAD
    options: {}
=======
    options: {
      elements: {
        pointBorderWidth:5
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
>>>>>>> 3e8e698f7a02f4bf6ecdee33852803b287ac334c
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
<<<<<<< HEAD
    
=======
>>>>>>> 3e8e698f7a02f4bf6ecdee33852803b287ac334c
};