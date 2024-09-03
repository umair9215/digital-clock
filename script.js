function digitalClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var period = "AM";

    if (hours >= 12) {
        period = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12;
    }


    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

   


    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[now.getDay()];
    var date = now.getDate();
    var month = now.toLocaleString('default', { month: 'long' });
    var year = now.getFullYear();

    document.getElementById('time').textContent = hours + ':' + minutes + ':' + seconds + ' ' + period;
    document.getElementById('date').textContent = day + ', ' + month + ' ' + date + ', ' + year;
}
setInterval(digitalClock, 1000);
digitalClock();
