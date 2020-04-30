const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
let countDown = new Date('May 03, 2020 20:00:00').getTime(),
    x = setInterval(function () {
        let now = new Date().getTime(),
            distance = countDown - now;
        if (Math.floor(distance / (day)) >= 3) {
            document.getElementById('container h1').innerText = "The Challenge starts in"
            let remain = distance - (day * 3);
            document.getElementById('days').innerText = Math.floor(remain / (day)),
                document.getElementById('hours').innerText = Math.floor((remain % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((remain % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((remain % (minute)) / second);
        } else {
            document.getElementById('container h1').innerText = "The Challenge deadline in"
            document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        }
    }, second)
