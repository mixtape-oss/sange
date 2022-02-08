declare module "sange" {
    export class Player implements common {
        constructor(buffer: Uint8Array, bindEmitters?: Boolean)

        get paused(): boolean;
        set paused(state: boolean);
        get ffplayer(): FfmpegPlayer;

        destroy(): void;
        getDuration(): number;
        getFramesDropped(): number;
        getTime(): number;
        getTotalFrames(): number;
        seek(timecode: number): void;
        setBitrate(bitrate: number): void;
        setEqualizer(eqs: Equalizer[]): void;
        setOutput(channels: number, sampleRate: number, bitrate: number): void;
        setRate(rate: number): void;
        setTempo(tempo: number): void;
        setTremolo(depth: number, rate: number): void;
        setURL(url: string): void;
        setVolume(volume: number): void;
        start(): void;
        stop(): void;
    }

    export interface FfmpegPlayer extends common {
        onready?: () => void;
        ondebug?: (msg: string) => void;
        onerror?: (error: Error, code: number, retryable: boolean) => void;
        onfinish?: () => void;
        onpacket?: (data: Uint8Array, size: number, duration: number) => void;

        setPaused(state: boolean): void;
        pipe(ip?: string, port?: number): void;
        setSecretBox(key: Uint8Array, mode: number, ssrc: number): void;
        updateSecretBox(sequence: number, timestamp: number, nonce: number): void;
        getSecretBox(): SecretBox;
        isCodecCopy(): boolean;
        getFramesDropped(): number;
        getTotalFrames(): number;
    }

    export interface common {
        setURL(url: string): void;
        setOutput(channels: number, sampleRate: number, bitrate: number): void;
        setVolume(volume: number): void;
        setBitrate(bitrate: number): void;
        setRate(rate: number): void;
        setTempo(tempo: number): void;
        setTremolo(depth: number, rate: number): void;
        setEqualizer(eqs: Equalizer[]): void;
        seek(timecode: number): void;
        getTime(): number;
        getDuration(): number;
        start(): void;
        stop(): void;
        destroy(): void;
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
