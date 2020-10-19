class UI extends Phaser.Scene {
  constructor() {
    super({
      key: 'ui'
    })
    console.log("5");
  }
  create() {

    const hearts = this.add.group({
      classType: Phaser.GameObjects.Image
    })
    hearts.createMultiple({
      key: 'heart-full',
      setXY: {
        x: 10,
        y: 10,
        stepX: 16
      },
      quantity: 3
    })
  }
}