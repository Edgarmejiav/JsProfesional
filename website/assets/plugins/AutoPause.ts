import MediaPlayer from "../MediaPlayer";

class AutoPause {
  threshold: number;
  player: MediaPlayer | undefined;

  constructor() {
    this.threshold = 0.25;

    this.handleIntersection = this.handleIntersection.bind(this);
  }
  run(player: MediaPlayer | undefined) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    observer.observe(this.player?.media!);

    document.addEventListener("visibilitychange", () =>
      this.handleVisibilityChange()
    );
  }
  handleIntersection(entries: any[]) {
    const entry = entries[0];

    const isVisibile = entry.intersectionRatio >= this.threshold;

    if (isVisibile) {
      this.player?.play();
    } else {
      this.player?.pause();
    }
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player?.play();
    } else {
      this.player?.pause();
    }
  }
}

export default AutoPause;
