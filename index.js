const moment = require('moment');

const date = '2020-09-10T00:00:00.266Z'; // Dia del evento traido de la base de datos (date)
const start_hour = '09:30' // Hora de inicio de evento traido de la base de datos (start_hour)

function timeToStart(date, start_hour) {
    const today = moment().toISOString();
    const eventDate = moment(date);
    const startHour = start_hour;
    const startHours = startHour.slice(0, 2);
    const startMinutes = startHour.slice(3, 5);
    const startEvent = moment(eventDate).hour(startHours).minute(startMinutes);
    let days = startEvent.diff(today, 'days');
    let hours = startEvent.diff(today, 'hours');
    let minutes = startEvent.diff(today, 'minutes');
    let seconds = startEvent.diff(today, 'seconds');

    if (days < 0) {
        days = '00';
    } else if (days < 10) {
        days = '0' + days
    }

    hours = hours - (days * 24);
    if (hours < 0) {
        hours = '00';
    } else if (hours < 10) {
        hours = '0' + hours
    }

    minutes = minutes - (days * 1440) - (hours * 60);
    if (minutes < 0) {
        minutes = '00';
    } else if (minutes < 10) {
        minutes = '0' + minutes
    }

    seconds = seconds - (days * 86400) - (hours * 3600) - (minutes * 60);
    if (seconds < 0) {
        seconds = '00';
    } else if (seconds < 10) {
        seconds = '0' + seconds
    }

    console.log(`Faltan: ${days} Días, ${hours} Horas, ${minutes} Minutos, ${seconds} Segundos`);
}

setInterval(() => {
    timeToStart(date, start_hour);
}, 1000);