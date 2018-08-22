var Events= require('events');
var eventsEmitter = new Events.EventEmitter();
eventsEmitter.once('fyj222',function(arg1,arg2,arg3){  // 不管这个监听的外层是循环还是定时器，只要执行过一次就会销毁这个监听器
    console.log('监听成功3333',arg1,arg2,arg3);
});

eventsEmitter.on('fyj',function(arg1,arg2,arg3){
    console.log('监听成功111',arg1,arg2,arg3);
});
eventsEmitter.on('fyj',function(arg1,arg2,arg3){
    console.log('监听成功222',arg1,arg2,arg3);
});
eventsEmitter.removeAllListeners('fyj');
setTimeout(function(){
    eventsEmitter.emit('fyj','123','456','678');
    eventsEmitter.emit('fyj222','123','456','678');
},1000);


