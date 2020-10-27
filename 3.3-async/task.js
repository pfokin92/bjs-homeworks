class AlarmClock{
    constructor (){
        this.alarmCollection = [];
        this.timerId;
    }
    addClock(time, callback, id) {
        if(id === undefined)
        {
            throw new Error('Невозможно индефицировать будильник.Параметр id не передан');
        }
        if(this.alarmCollection.some(element => element.timerId===id))
        {
            return console.error('Будильник с таким id существует')
        }
        const element = {};
        element.time = time;
        element.callback=callback;
        element.timerId=id;
        this.alarmCollection.push(element);
    }
    removeClock(id){
        const find = this.alarmCollection.findIndex(element => element.timerId===id);
        if (find === undefined)
        {
            return console.log('Будильник не найден');
        }
        return this.alarmCollection.splice(find,1);
    }
    getCurrentFormattedTime(){
        const now = new Date();
        if(now.getMinutes()<10){
            return `${now.getHours()}:0${now.getMinutes()}`;
        }
        return `${now.getHours()}:${now.getMinutes()}`;
    }
    start(){
        if(!this.identifier){
            this.identifier = setInterval(()=>{
                return this.alarmCollection.forEach(element => this.checkClock(element.time, element.callback))
            }
                ,60000);
        }
        
    }
    checkClock(time, callback){
        const timeNow = this.getCurrentFormattedTime();
        if( time === timeNow){
            return callback();
        }
    }
    stop(){
        clearInterval(this.identifier);
    }
    printAlarms(){
        console.log(`Печать всех будильников в количестве:${this.alarmCollection.length}`)
        this.alarmCollection.forEach(element => {
            console.log(`Будильник №${element.timerId} заведен на ${element.time}`)
        });
    }
    clearAlarms(){
        clearInterval(this.identifier);
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();

console.log(phoneAlarm.getCurrentFormattedTime())


phoneAlarm.addClock("19:21", ()=> console.log("Пора вставать"),1);
phoneAlarm.addClock("19:22", ()=> console.log("Вставай, а то проспишь!"),2);
phoneAlarm.addClock("19:23", ()=> console.log("Давай, вствай уже!"),3);
phoneAlarm.addClock("19:24", ()=> console.log("Да ты задрал уже!"),4);
phoneAlarm.addClock("19:25", ()=> console.log("Подъем!"),5);
phoneAlarm.addClock("19:26", ()=> console.log("Я верю в тебя!"),6);
phoneAlarm.addClock("19:27", ()=> console.log("Вставай!"),7);
phoneAlarm.addClock("19:28", ()=> console.log("Вставай!"),8);

phoneAlarm.printAlarms();





phoneAlarm.removeClock(2);



//phoneAlarm.addClock("09:01", ()=> console.log("Пора вставать"));







phoneAlarm.start();


setTimeout(()=>phoneAlarm.stop(), 120000);
setTimeout(()=>phoneAlarm.clearAlarms(), 180000);

setTimeout(()=>phoneAlarm.printAlarms(), 190000);




