function timerfunction() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timerfunction, 1000);