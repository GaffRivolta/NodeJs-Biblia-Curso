const Emitter = require('./emitter');

const emitter = new Emitter();

emitter.on('save', () => {
    console.log('Save Activated 1');
});

emitter.on('save', () => {
    console.log('Save Activated 2');
});

emitter.emit('save');