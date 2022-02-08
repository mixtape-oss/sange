const EventEmitter = require('events');

const bindings = require('bindings');
const ffplayer = bindings('sange');

const kPaused = Symbol("paused");
const kPlayer = Symbol("player");

module.exports.Player = class Player extends EventEmitter {
    constructor(buffer, bind_emitters = true) {
        super();

        this[kPaused] = false;
        this[kPlayer] = buffer 
            ? new ffplayer(buffer) 
            : new ffplayer();

        if (bind_emitters) {
            this[kPlayer].onready = this.emit.bind(this, 'ready');
            this[kPlayer].onpacket = this.emit.bind(this, 'packet');
            this[kPlayer].onfinish = this.emit.bind(this, 'finish');
            this[kPlayer].ondebug = this.emit.bind(this, 'debug');
            this[kPlayer].onerror = this.emit.bind(this, 'onerror');
        }
    }

    get ffplayer() {
        return this[kPlayer]
    }

    get paused() {
        return this[kPaused]
    }

    set paused(state) {
        this[kPaused] = state;
        this[kPlayer].setPaused(state);
    }

    setURL(url) {
        return this[kPlayer].setURL(url);
    }

    setOutput(channels, sample_rate, bitrate) {
        return this[kPlayer].setOutput(channels, sample_rate, bitrate);
    }

    setVolume(volume) {
        return this[kPlayer].setVolume(volume);
    }

    setBitrate(bitrate) {
        return this[kPlayer].setBitrate(bitrate);
    }

    setRate(rate) {
        return this[kPlayer].setRate(rate);
    }

    setTempo(tempo) {
        return this[kPlayer].setTempo(tempo);
    }

    setTremolo(depth, rate) {
        return this[kPlayer].setTremolo(depth, rate);
    }

    setEqualizer(eqs) {
        return this[kPlayer].setEqualizer(...eqs);
    }

    seek(time) {
        return this[kPlayer].seek(time);
    }

    getTime() {
        return this[kPlayer].getTime();
    }

    getDuration() {
        return this[kPlayer].getDuration();
    }

    start() {
        return this[kPlayer].start();
    }

    stop() {
        return this[kPlayer].stop();
    }

    destroy() {
        return this[kPlayer].destroy();
    }
}
