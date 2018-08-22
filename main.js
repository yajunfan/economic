exports.world={
    aa:function () { console.log('aa') },
    bb:function () { console.log('bb') },
    ccc:function () { console.log('cc') }
};

var Event = require('events');
var eventEmitter  = new Event.EventEmitter();
console.log('main')

var eventHandle = function(){
   console.log('触发监听事件成功');
   eventEmitter.emit('fyj');

};
var dataHandle = function(){
    console.log('接收数据成功');
 };
eventEmitter.on('eventName',eventHandle);
eventEmitter.on('fyj',dataHandle);
eventEmitter.emit('eventName');

