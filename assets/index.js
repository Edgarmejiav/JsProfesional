const video = document.querySelector("video");
const button = document.querySelector("button");
function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};

const player = new MediaPlayer({ el: video });
button.onclick = () => player.play();
video.play();
