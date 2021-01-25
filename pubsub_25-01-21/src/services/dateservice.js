import culture from './config.js'
const DAYSOFWEEK = 7;
function getFirstDayOfMonth(date) { // date = (yyyy/mm/dd)
    return new Date(date.getFullYear(), date.getMonth(), 1)  // encuentra el primer dia del mes de"date"
}
function cloneDate(date){
    return new Date(date.getTime())    // clona la fecha que parte desde el inicio del algoritmo
}
function addDays(date,number=1){
    return new Date(date.setDate(number)) // configurarme una nueva fecha pasandole el dia de la fecha a la que quiero cambiar
}
function getFirstDayOfWeek(date){
    let firstDayOfWeek = culture.firstDayOfWeek; // 0 ó 1
    let dayOfWeek = date.getDay() // 0 to 6 // por ejemplo, si es hoy miercoles 20 de enero de 2021 entonces === 2
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator
    let dif = dayOfWeek >= firstDayOfWeek ?
        date.getDate() - dayOfWeek : date.getDate() - DAYSOFWEEK  // 20 - 3 ... dif = 17      
    return addDays(date,dif+firstDayOfWeek) // aqui convierte el numero a fecha 
}

function getDataObject(date,today){
    // crea un objeto con los datos
    // {date: 2021-01-20, today: true, isInMonth: true}
    return {
        date,
        today:isToday(date,today),
        isInMonth:isInMonth(date,today)   
    }
}
export function isToday(current, date) {  
    // pasas la fecha de hoy y la compara para comprobar si es hoy con le fecha que se va acutalizando en el calendario
    return current.getDate() === date.getDate() &&
        current.getMonth() === date.getMonth() &&
        current.getFullYear() === date.getFullYear();
}
export function isInMonth(current, date) {
    // pasas la fecha de hoy y la compara para comprobar si es este mes con le fecha que se va acutalizando en el calendario
    return current.getMonth() === date.getMonth() &&
        current.getFullYear() === date.getFullYear();
}
export function getMonthCalendar(date,numberDays=42){
    let i=0;
    let days=[];
    // devuelve el primer lunes donde esta el dia 1 del mes 
    let _date = getFirstDayOfWeek(getFirstDayOfMonth(cloneDate(date)))
    let today = new Date()
    do {
        days.push(getDataObject(cloneDate(_date),today))
        _date = addDays(_date,_date.getDate()+1)
    } while(++i<numberDays)
    return days;
}

export function getNextOrPreviosMonth(date,dif){
    // devuelve una fecha con el nuevo mes actualizado
    //dif puede ser 1 ó -1 dependiendo si quiero anvanzar un mes o ir al anterior.
    let firstDayOfMonth =getFirstDayOfMonth(date);
    let newMonth = firstDayOfMonth.getMonth() + dif;
    return new Date(firstDayOfMonth.setMonth(newMonth));
}