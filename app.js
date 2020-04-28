var prevdate = new Date("Apr 5,2018 14:05:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - prevdate;

    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = years + " yr  " + days + " d  " + hours + " h  " +
        minutes + " m  " + seconds + " s  ";
});
