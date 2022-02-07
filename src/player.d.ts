declare module "sange" {
    export class Player implements common {
        constructor(buffer: Uint8Array, bindEmitters?: Boolean)

        get paused(): boolean;
        set paused(state: boolean);
        get ffplayer(): FfmpegPlayer;

        destroy();
        getDuration(): number;
        getFramesDropped(): number;
        getTime(): number;
        getTotalFrames(): number;
        seek(timecode: number);
        setBitrate(bitrate: number);
        setEqualizer(eqs: Equalizer[]);
        setOutput(channels: number, sampleRate: number, bitrate: number);
        setRate(rate: number);
        setTempo(tempo: number);
        setTremolo(depth: number, rate: number);
        setURL(url: string);
        setVolume(volume: number);
        start();
        stop();
    }

    export interface FfmpegPlayer extends common {
        setPaused(state: boolean);
        pipe();
        setSecretBox(key: Uint8Array, mode: number, ssrc: number)
        updateSecretBox(sequence: number, timestamp: number, nonce: number)
        getSecretBox(): SecretBox;
        isCodecCopy(): boolean;
    }

    export interface common {
        setURL(url: string);
        setOutput(channels: number, sampleRate: number, bitrate: number);
        setVolume(volume: number);
        setBitrate(bitrate: number);
        setRate(rate: number);
        setTempo(tempo: number);
        setTremolo(depth: number, rate: number);
        setEqualizer(eqs: Equalizer[]);
        seek(timecode: number);
        getTime(): number;
        getDuration(): number;
        getFramesDropped(): number;
        getTotalFrames(): number;
        start();
        stop();
        destroy();
    }

    export interface SecretBox {
        nonce: number;
        timestamp: number;
        sequence: number;
    }

    export interface Equalizer {
        band: number;
        gain: number;
    }

}
