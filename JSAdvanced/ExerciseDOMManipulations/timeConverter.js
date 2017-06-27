function attachEventsListeners() {

    document.getElementById('daysBtn').addEventListener('click', byDays);
    document.getElementById('hoursBtn').addEventListener('click', byHours);
    document.getElementById('minutesBtn').addEventListener('click', byMinutes);
    document.getElementById('secondsBtn').addEventListener('click', bySeconds);

    let rates = {
        'Days' : 1,
        'Hours' : 24,
        'Minutes' : 1440,
        'Seconds' : 86400
    }
    
    function byDays() {
        let input = Number(document.getElementById('days').value);
        let units = "Days";
        convert(input,units);
    }

    function byHours() {
        let input = Number(document.getElementById('hours').value);
        let units = "Hours";
        convert(input,units);
    }

    function byMinutes() {
        let input = Number(document.getElementById('minutes').value);
        let units = "Minutes";
        convert(input,units);
    }

    function bySeconds() {
        let input = Number(document.getElementById('seconds').value);
        let  units = "Seconds";
        convert(input,units);
    }

    function convert(input, units) {
        document.getElementById('days').value = input/rates[units]*rates['Days'];
        document.getElementById('hours').value = input/rates[units]*rates['Hours'];
        document.getElementById('minutes').value = input/rates[units]*rates['Minutes'];
        document.getElementById('seconds').value = input/rates[units]*rates['Seconds'];
    }

}
