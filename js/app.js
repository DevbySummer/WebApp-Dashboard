const alertBanner = document.getElementById('alert');

// create the HTML for the banner
alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete.</p>
    <p class="alert-banner-close">x</p>
</div>
`
// Click Event Listener for 'x' to close Alert
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains('alert-banner-close')) {
        alertBanner.style.display = "none"
    }
});

// -------------- Line Graph - traffic-chart --------------
const trafficCanvas = document.getElementById('traffic-chart');
// Object Literal representing the data for the traffic chart
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};
// Object Literal setting options to change for the chart
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales : {
        yAxis: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend : {
        display: false
    }
};
// Creating the chart
let trafficChart = new Chart(trafficCanvas, { 
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// -------------- Bar Graph - Daily-chart --------------
const dailyCanvas = document.getElementById('daily-chart');
// Object Literal representing the data for the Daily chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
// Object Literal setting options to change for the chart
dailyOptions = {
    scales: {
        yAxis: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};
// Creating the chart
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// -------------- Doughnut Graph - Mobile-chart --------------
const mobileCanvas = document.getElementById('mobile-users');
// Object Literal representing the data for the Mobile chart
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};
// Object Literal setting options to change for the chart
const mobileOptions = {
    legend: {
        positon: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};
// Creating the chart
const mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
})

// -------------- Messaging Section --------------

