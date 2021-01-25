class PubSub{
    
    constructor(){
      this.topics = new Map();
    }
    on(topic,cb){
       let suscriptors = this.topics.get(topic)
       if(!suscriptors){
           suscriptors =new Set();
           this.topics.set(topic,suscriptors)
       }
       suscriptors.add(cb)
       return ()=>suscriptors.delete(cb)
    }
    emit(topic,data){
	let suscriptors = this.topics.get(topic);
        suscriptors && suscriptors.forEach(s=>{
           s(data)
        })
    }
}