function attachGradientEvents() {
    let gradient = document.getElementById('gradient-box')

    gradient.addEventListener('mousemove', measure);
    gradient.addEventListener('mouseout', stopMeasure);

    function measure(event) {
        //console.dir(event);
        let x = event.offsetX;
        //console.dir(event.target);
        let percent = Math.trunc((x/event.target.clientWidth)*100).toFixed(0);
        //console.log(x);
        //console.log(persent);
        document.getElementById('result').textContent = `${percent}%`;
    }

    function stopMeasure() {
        document.getElementById('result').textContent = ``;
    }

    //console.log('go');
}
