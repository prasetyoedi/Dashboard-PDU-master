// Data waktu dalam jam
// var waktu = [
//     '14:00', '14:05', '14:10', '14:15', '14:20', '14:25', '14:30', '14:35', '14:40', '14:45', '14:50', '14:55', '15:00', '15:00', '15:00', '15:00', '15:00', '15:00', '15:00', '15:00', '15:00', '15:00'
// ];

var waktu = [];
var start = new Date('2024-03-17T14:00:00'); // Start time
var end = new Date('2024-03-17T14:03:00');   // End time

while (start <= end) {
    var hours = start.getHours().toString().padStart(2, '0');
    var minutes = start.getMinutes().toString().padStart(2, '0');
    var seconds = start.getSeconds().toString().padStart(2, '0');
    waktu.push(`${hours}:${minutes}:${seconds}`); // Push formatted time to array
    start.setSeconds(start.getSeconds() + 10); // Increment by 10 seconds
}

console.log(waktu);


// Data untuk setiap variabel pada setiap chart
var dataVar1 = [10, 20, 20, 25, 15, 22, 18, 10, 20, 20, 25, 15, 22, 18, 10, 20, 20, 25, 15, 22, 18];
var dataVar2 = [15, 25, 35, 35, 15, 27, 23, 15, 25, 35, 35, 15, 27, 23, 15, 25, 35, 35, 15, 27, 23];
var dataVar3 = [30, 30, 50, 35, 25, 22, 28, 30, 30, 50, 35, 25, 22, 28, 30, 30, 50, 35, 25, 22, 28];
var dataVar4 = [15, 35, 45, 40, 30, 37, 33, 15, 35, 45, 40, 30, 37, 33, 15, 35, 45, 40, 30, 37, 33];
var dataVar5 = [25, 40, 50, 45, 35, 42, 38, 25, 40, 50, 45, 35, 42, 38, 25, 40, 50, 45, 35, 42, 38];

// Inisialisasi grafik untuk chart pertama
var ctx1 = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: waktu,
        datasets: [{
            label: 'Air Rate (scfm)',
            data: dataVar1,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Mud Conduct. In',
            data: dataVar2,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Block Position',
            data: dataVar3,
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'WOB',
            data: dataVar4,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'ROP',
            data: dataVar5,
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',

    }
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: waktu,
        datasets: [{
            label: 'Mud Conduct. Out',
            data: dataVar2,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Torque',
            data: dataVar3,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'RPM (total)',
            data: dataVar1,
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Hookload',
            data: dataVar5,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',

    }
});

var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: waktu,
        datasets: [{
            label: 'Var 1',
            data: dataVar5,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Var 2',
            data: dataVar4,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Var 3',
            data: dataVar3,
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Var 4',
            data: dataVar2,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Var 5',
            data: dataVar1,
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',

    }
});

var ctx4 = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: waktu,
        datasets: [{
            label: 'Var 1',
            data: dataVar3,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Var 2',
            data: dataVar1,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Var 3',
            data: dataVar5,
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Var 4',
            data: dataVar2,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Var 5',
            data: dataVar4,
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
    }
});
