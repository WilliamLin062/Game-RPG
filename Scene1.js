class Scene1 extends Phaser.Scene {
  constructor() {

    super('Scene1')
  }
  preload() {

  }

  create() {
    console.log(this.scene.run('ui'));
    this.scene.run('ui')
    const map = this.make.tilemap({
      key: 'dungeon'
    })
    const tileset = map.addTilesetImage('dungeon', 'tiles')
    map.createStaticLayer('Ground', tileset)
    const wallsLayer = map.createStaticLayer('Walls', tileset)




    wallsLayer.setCollisionByProperty({
      colides: true
    })


    // const debug = new Debug(this, wallsLayer)

    this.fauna = this.add.fauna(100, 100)
    this.physics.add.existing(this.fauna)

    //this.fauna.setCollideWorldBounds(true);

    this.physics.add.collider(this.fauna, wallsLayer)
    this.cameras.main.startFollow(this.fauna, true)



    //enemy 
    const lizards = this.physics.add.group({
      classType: Lizard,
      createCallback: (go) => {
        const lizGo = go
        lizGo.body.onCollide = true
      }
    })
    lizards.get(256, 128, 'lizard')
    //  const lizard = this.physics.add.sprite(256, 256, 'lizard', 'lizard_m_idle_anim_f0.png')

    this.physics.add.collider(lizards, wallsLayer)
    this.physics.add.collider(lizards, this.fauna, this.handleEnemyCollide, undefined, this)
  }
  handleEnemyCollide(obj1, obj2) {
    const dx = obj1.x - obj2.x
    const dy = obj1.y - obj2.y
    const dir = new Phaser.Math.Vector2(dx, dy).normalize().scale(200)

    console.log(obj1.info.type === 'player', obj2.info.type);
    if (obj1.info.type === 'player' && obj2.info.type === 'enemy') {
      obj1.info.health -= obj2.info.power
      obj1.setVelocity(dir.x, dir.y)
    }
    sceneEvents.emit('player-health-changed')
  }

  update() {


  }
}