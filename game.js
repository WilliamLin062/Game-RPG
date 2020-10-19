var config = {
  width: 640,
  height: 360,
  backgroundColor: 0x000000,
  scene: [Loading, Scene1, UI],
  pixelArt: true,
  scale: {
    zoom: 2,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
}
var gameSettings = {
  playerSpeed: 100,
}
var game = new Phaser.Game(config)