const clock = document.getElementById('clock');
let i = 0;
setInterval(() => {
    let time = new Date();
    clock.innerText = time.toTimeString().slice(0,8);
}, 1000);
setInterval(() => {
    let color = `hsla(${i}, 100%, 50%,1)`;
    document.body.style.background = color;
    i += 1 ;
}, 100);