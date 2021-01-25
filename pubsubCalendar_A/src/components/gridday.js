 class GridDay extends HTMLElement{
    #day
    #time
    #text
    set day(value){
        this.#day = value;
        if(!this.children.length){
            this.#create()
        }
        this.#update()
    }
    get day(){
        return this.#day;
    }
    #update(){
        let datetime = this.#day.date.toISOString();
        this.#time.setAttribute('datetime',datetime)
        this.#text.data = this.#day.date.getDate()
    }
    #create(){
        let button = document.createElement('button');  // <gnt-gridday><button><time></time></button></gnt-gridday> 
        this.#time = document.createElement('time')
        this.#text = document.createTextNode('')
        this.#time.appendChild(this.#text);
        button.appendChild(this.#time)
        return button
    }
    connectedCallback() {
        this.appendChild(this.#create());
        this.#update()
    }
    
}
customElements.define("gnt-gridday",GridDay)