import {TimerService} from '../services/timerservice.js'
class Timer extends HTMLElement{
    #time
    #text
    #timerService
    constructor(){
        super();
        // la instancia de un objeto de la clase TimerServices
        // la instancia queda almacenada en la propiedad #timerServices
        this.#timerService = new TimerService();
    }
    //arroja un resultado tipo ´date´ 
    #update(){
        let date = new Date()
        this.#time.setAttribute('datetime',date.toISOString())
        this.#text.data = date
        // < datetime="WEN 23 JUlY>date<>"
    }
    #create(){
        this.#time = document.createElement('time')
        this.#text = document.createTextNode('')
        this.#time.appendChild(this.#text)
        return this.#time;
    }
    connectedCallback(){
        // segundo paso, invocar al connectedCallback()
        // "gnt-timer" empieza a tener hijo a create()
        // luego crea un atributo dentro del elemento "time"--> "datetieme"
        // luego del objeto timerServices invoca el metodo suscribe e ingresa el ambito con bind manteniendo el ambito.
        this.appendChild(this.#create())
        this.#update();
        this.#timerService.suscribe(this.#update.bind(this))
    }
    disconnectedCallback(){
        this.removeChild(this.#time);
        this.#timerService.dispose();
    }
}
customElements.define('gnt-timer',Timer)