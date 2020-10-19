class Debug extends Phaser.Scene {
  constructor(scene, layer) {
    super(scene, layer)
    const debugGraphics = scene.add.graphics().setAlpha(0.7)

    layer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 234, 48),
      faceColor: new Phaser.Display.Color(50, 39, 37, 255)
    })
  }
}