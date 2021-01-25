import { 
    getMonthCalendar,               // IMPORTÓ METODOS DEL archivo ´´dataservice.js 
    getNextOrPreviosMonth,
    isInMonth as equalsMonth

} from '../services/dateservice.js'
import './gridday.js'
class GridMonth extends HTMLElement {
    #date = new Date()
    #childrenDays = []; // falta constructor con super();
    get date(){
        // el get me da acceso a la propiedad privada "#date" 
        return this.#date;
    }
    set date(value){
        // if lo que me evalua, es si la fecha ingresada equivale a un valor soportado o instaciado de new Date()
        if(!value || !(value instanceof Date)){
            throw "type is not supported"
        }
        if (!equalsMonth(value,this.#date)){
            // value = a una nueva fecha, la que quieres obtener el mes del calendario
            // this.#date = es la fecha de referencia, la actual.
            //equalsMonth === es una funcion que me devuelve si value y this.#date estan en el mismo mes
            this.#date = value;
            this.#update();
        }
    }
    nextMonth(){
        this.date = getNextOrPreviosMonth(this.date,1)
    }
    previousMonth(){
        this.date = getNextOrPreviosMonth(this.date,-1)
    }
    #update(){
        // value == 2de feb 2021
        // days == [{date: 2 de feb, booleano1,booleano2}];
        // por cada elemento del un array hacer algo... 
        //a childrenDays me lo rellena on el "date" del array "days"
        let days = getMonthCalendar(this.date);        
        days.forEach((day,i)=>{
            this.#childrenDays[i].day = day;
        })
    }
    #create(){
        let days = getMonthCalendar(this.date)
        for (let i = 0; i < days.length; i++) {
            let dayGrid = document.createElement('gnt-gridday')
            dayGrid.day = days[i] 
            this.#childrenDays.push(dayGrid)
            this.appendChild(dayGrid)
        }
    }
    connectedCallback() {
        this.#create();
    }
}
customElements.define('gnt-gridmonth',GridMonth)