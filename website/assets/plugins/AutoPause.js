"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
    }
    run(player) {
        var _a;
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });
        observer.observe((_a = this.player) === null || _a === void 0 ? void 0 : _a.media);
        document.addEventListener("visibilitychange", () => this.handleVisibilityChange());
    }
    handleIntersection(entries) {
        var _a, _b;
        const entry = entries[0];
        const isVisibile = entry.intersectionRatio >= this.threshold;
        if (isVisibile) {
            (_a = this.player) === null || _a === void 0 ? void 0 : _a.play();
        }
        else {
            (_b = this.player) === null || _b === void 0 ? void 0 : _b.pause();
        }
    }
    handleVisibilityChange() {
        var _a, _b;
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            (_a = this.player) === null || _a === void 0 ? void 0 : _a.play();
        }
        else {
            (_b = this.player) === null || _b === void 0 ? void 0 : _b.pause();
        }
    }
}
exports.default = AutoPause;
