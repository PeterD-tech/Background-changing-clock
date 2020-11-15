const clock = document.getElementById('clock');
setInterval(() => {
    let time = new Date();
    clock.innerText = time.toTimeString().slice(0,8);
    
}, 1000);