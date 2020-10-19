class Fauna extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    this.scale = 0.5
    this.anims.play('fauna-idle-up', true)
    console.log(this);
    this.info = {
      type: 'player',
      health: 100,
      power: 2,
      speed: 50
    }
    this.state = {
      isHurt: false,
      damageTime: 0
    }
    this.cursors = scene.input.keyboard.createCursorKeys()

  }
  preUpdate(t, dt) {
    const {
      damageTime
    } = this.state
    super.preUpdate(t, dt)
    if (damageTime > 0) {
      --damageTime
      this.setTint(0xff0000)
    }
    this.animationContorl()
    this.playerMovement()

  }

  animationContorl() {
    if (this.cursors.left.isDown) {
      this.anims.play('fauna-run-side', true)
      this.flipX = true

    } else if (this.cursors.right.isDown) {
      this.anims.play('fauna-run-side', true)
      this.flipX = false

    }

    if (this.cursors.up.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown) {
      this.anims.play('fauna-run-up', true)

    } else if (this.cursors.down.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown) {
      this.anims.play('fauna-run-down', true)
    }
    if (this.body.velocity.x === 0 && this.body.velocity.y === 0 && this.anims.currentAnim !== null) {

      const parts = this.anims.currentAnim.key.split('-')
      parts[1] = 'idle'
      this.play(parts.join('-'))
    }
  }
  playerMovement() {
    if (this.cursors.left.isDown) {
      console.log('left');
      this.setVelocityX(-gameSettings.playerSpeed)
    } else if (this.cursors.right.isDown) {

      this.setVelocityX(gameSettings.playerSpeed)
    } else {

      this.setVelocityX(0)
    }

    if (this.cursors.up.isDown) {

      this.setVelocityY(-gameSettings.playerSpeed)
    } else if (this.cursors.down.isDown) {

      this.setVelocityY(gameSettings.playerSpeed)
    } else {
      this.setVelocityY(0)
    }

  }

}

Phaser.GameObjects.GameObjectFactory.register('fauna', function (x, y) {
  const fauna = new Fauna(this.scene, x, y)

  this.displayList.add(fauna)
  this.updateList.add(fauna)

  return fauna
})