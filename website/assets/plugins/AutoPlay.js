"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AutoPlay {
    constructor() { }
    run(player) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }
}
exports.default = AutoPlay;
