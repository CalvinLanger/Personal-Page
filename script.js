

function blinker() {
    $('.blinking')
        .fadeOut(500);
    $('.blinking')
        .fadeIn(500);
}
setInterval(blinker, 1000);

document.getElementById('intro').innerHTML = "Hello world!"
