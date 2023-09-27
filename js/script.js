// obtener hora, minuto, segundo 
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const seconds_in_hour = 3600;//segundos en una hora
const seconds_half_day = seconds_in_hour * 12; //segundos al medio dia
const circle = 360;//grados circulo

//segundos transcurridos desde el inicio del dia
function getSecondsSinceStartOfDay() {
    const now = new Date;//hora actual del sistema
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    return seconds + minutes * 60 + hours * seconds_in_hour;
}

//obtener el ángulo de los segundos
function getSecond(time) {
    time %= 60;// segundos transcurridos desde el minuto actual
    const degreesPerSecond = circle / 60; //grados por segundo
    return (degreesPerSecond * time + 180) % circle; //calcular el ángulo para los segundos
}
//obtener el ángulo de los minutos
function getMinute(time) {
    time %= seconds_in_hour;// minutos transcurridos desde el minuto actual
    const degreesPerSecond = circle / seconds_in_hour;//grados por minuto
    return (degreesPerSecond * time + 180) % circle;//calcular el ángulo para los minutos
}
// obtener el ángulo de la hora
function getHour(time) {
    time %= seconds_half_day;// horas transcurridas desde el minuto actual
    const degreesPerSecond = circle / seconds_half_day;//grados por hora
    return (degreesPerSecond * time + 180) % circle;//calcular el ángulo para las horas
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    seconds.style.transform = `rotate(${getSecond(time)}deg)`;
    minutes.style.transform = `rotate(${getMinute(time)}deg)`;
    hour.style.transform = `rotate(${getHour(time)}deg)`;
}, 1000);
