window.onload = function () {
  AOS.init()

  const labels = [
    '성실',
    '도전',
    '협력',
    '집중',
    '이해',
    '책임',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [9, 8, 7, 8, 8, 10],
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
    
};