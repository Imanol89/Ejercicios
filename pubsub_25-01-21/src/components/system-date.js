import{isToday as equalsDate} from '../services/dateservice.js'
export class SystemDate extends HTMLElement{
    #date = new Date();
    #text;
    #time;
   
    get date(){
        return this.#date;
    }
    set date(value){
        if(!equalsDate(this.date,value)){
            this.#date = value;
            this.#update();
        }
    }
    #update(){
        this.#time.setAttribute('datetime',this.date.toISOString())
        this.#text.data = new Intl.DateTimeFormat('es-ES',{dateStyle:'full'}).format(this.date);
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
customElements.define('gnt-system-date',SystemDate)

