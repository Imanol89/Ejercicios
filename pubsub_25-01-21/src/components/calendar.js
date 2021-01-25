import './timer.js'
import './gridmonth.js'
import './system-date.js'
import './month-date.js'
import {PubSub} from '../services/pubsub.js'
import TimerService from '../services/timerservice.js'

class Calendar extends HTMLElement {

    #pubsub = new PubSub ();
    #unsuscribe = null;

//Metodos que voy a usar para conectarme y suscribirme
//                     y para desconectarme y unsuscribirme
    connectedCallback (){
        this.unsuscribe = TimerService.suscribe(this.#pubsub)
    }

    disconnectedCallback(){
        this.#unsuscribe && this.#unsuscribe();
        this.#unsuscribe = null;
    }


}