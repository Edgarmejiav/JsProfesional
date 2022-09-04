"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MediaPlayer_1 = __importDefault(require("./MediaPlayer"));
const AutoPlay_1 = __importDefault(require("./plugins/AutoPlay"));
const AutoPause_1 = __importDefault(require("./plugins/AutoPause"));
const video = document.querySelector("video");
const player = new MediaPlayer_1.default({
    el: video,
    plugins: [new AutoPlay_1.default(), new AutoPause_1.default()],
});
const button = document.querySelector("button");
button.onclick = () => player.togglePlay();
const muteButton = document.querySelector("#muteButton");
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    }
    else {
        player.mute();
    }
};
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/website/sw.js").catch((error) => {
        console.log(error.message);
    });
}
