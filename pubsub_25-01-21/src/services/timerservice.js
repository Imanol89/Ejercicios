import { INTERVALCLOCK } from './config.js'
import { topics } from './topics.js'

class TimerService {

    #pubsubs = new Set();
    #processID = null;

    constructor() {
        
        this.#processID = setInterval(() => {
            let date = new Date();
            //el pubsubs es un array con 4 suscriptores
            this.#pubsubs.forEach((p) => { p.emit(topics, changedate, date) })
        }, INTERVALCLOCK);
        suscribe(pubsub){
            this.#pubsubs.add(pubsub);
            return ()=> this.#pubsubs.delete(pubsub);
        }
    }

    dispose() {
        // en palabras espa;olas que significa el condicional
        this.#processID && clearInterval(this.#processID)
        this.#processID = null;
    }
}

export default new TimerService()