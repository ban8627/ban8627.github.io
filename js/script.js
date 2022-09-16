window.onload = function () {
  AOS.init()

 /* ========================= possibility ========================= */

 new Chart(document.getElementById("radar-chart"), {
  type: 'radar',
  data: {
    labels: ["책임감", "성실성", "도전정신", "응용력", "소통능력"],
    datasets: [{
      fill: false,
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      radius:10,
      pointRadius:5,
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      data: [88, 78, 89, 95, 100],
      padding:25,
      length: {
        min: 0,
        max:100
      }
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Distribution in % of world population'
    }
   },
   scales: {
  }
});
  // ======================
};