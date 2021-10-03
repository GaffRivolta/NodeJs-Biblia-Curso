const { EventEmitter } = require('events');
const { SAVE } = require("./event-names");

const emitter = new EventEmitter();

emitter.on(SAVE, () => {
    console.log('Save Activated 1');
});

emitter.on(SAVE, () => {
    console.log('Save Activated 2');
});

emitter.emit('save');