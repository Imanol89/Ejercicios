import{isInMonth} from '../services/dateservice.js'
export class MonthDate extends HTMLElement{
    #date = new Date();
    #text;
    #time;
    get date(){
        return this.#date;
    }
    set date(value){
        if(!isInMonth(this.date,value)){
            this.#date = value;
            this.#update();
        }
    }
    #update(){
        this.#time.setAttribute('datetime',this.date.toISOString())
        this.#text.data = new Intl.DateTimeFormat('es-ES',{month:'long',year:'numeric'}).format(this.date);
    }
    #create(){
        this.#time = document.createElement('div')
        this.#text = document.createTextNode('')
        this.#time.appendChild(this.#text)
        return this.#time;
    }
    connectedCallback(){
        this.appendChild(this.#create());
        this.#update();
    }
    disconnectedCallback(){
        this.removeChild(this.#text)
    }
} 
customElements.define('gnt-system-month',MonthDate)