
const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

// Radar chart

var chrt = document.getElementById("chartId").getContext("2d");
      var chartId = new Chart(chrt, {
         type: 'radar',
         data: {
            labels: ["HTML", "CSS", "JAVASCRIPT", "CHART.JS", "JQUERY", "BOOTSTRP"],
            datasets: [{
               label: "online tutorial subjects",
               data: [20, 40, 33, 35, 30, 38],
               backgroundColor: ['lightgrey'],
               pointBackgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue', 'gold'],
               borderColor: ['black'],
               borderWidth: 1,
               pointRadius: 6,
            }],
         },
         options: {
            responsive: false,
            elements: {
               line: {
                  borderWidth: 3
               }
            }
         },
      });





// 

var xValue = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValue = [55, 49, 44, 24, 15];
var barColor = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myCha", {
  type: "doughnut",
  data: {
    labels: xValue,
    datasets: [{
      backgroundColor: barColor,
      data: yValue
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});