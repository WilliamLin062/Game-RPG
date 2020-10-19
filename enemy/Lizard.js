const randomDirection = (exclude) => {
  let newDirection = Phaser.Math.Between(0, 3)
  while (newDirection === exclude) {
    newDirection = Phaser.Math.Between(0, 3)
  }

  return newDirection
}
class Lizard extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    this.anims.play('lizard-idle')
    this.direction = {
      UP: 0,
      DOWN: 1,
      LEFT: 2,
      RIGHT: 3,
    }
    this.info = {
      type: 'enemy',
      power: 5,
      speed: 50,
      health: 50,
      arrmor: 5
    }
    this.state = {
      isHurt: false,

    }
    scene.physics.world.on(
      Phaser.Physics.Arcade.Events.TILE_COLLIDE,
      this.handleTileCollision,
      this
    )
    scene.time.addEvent({
      delay: 2000,
      callback: () => {
        this.direction = randomDirection(this.direction)
      },
      loop: true
    })
  }

  handleTileCollision(go, tile) {
    if (go !== this) {
      return
    }

    this.direction = randomDirection(this.direction)
  }

  destroy(fromScene) {
    this.moveEvent.destroy()
    super.destroy(fromScene)
  }
  preUpdate(t, dt) {
    super.preUpdate(t, dt)
    const speed = this.info.speed
    switch (this.direction) {
      case 0:
        this.flipX = true
        this.anims.play('lizard-run', true)
        this.setVelocityX(-speed)
        break
      case 1:
        this.anims.play('lizard-run', true)
        this.setVelocityY(-speed)

        break
      case 2:
        this.anims.play('lizard-run', true)
        this.setVelocityY(speed)
        break
      case 3:
        this.flipX = false
        this.anims.play('lizard-run', true)
        this.setVelocityX(speed)
        break

      default:
        this.anims.play('lizard-run', true)
        this.setVelocityY(speed)
        break
    }
  }
}