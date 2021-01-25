import {INTERVALCLOCK} from './config.js'

export class TimerService{
    #processID = null;
    suscribe(cb){
       this.#processID = setInterval(cb,INTERVALCLOCK)
    }
    dispose(){
        // en palabras espa;olas que significa el condicional
     this.#processID && clearInterval(this.#processID)
     this.#processID = null;   
    }
}