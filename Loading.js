class Loading extends Phaser.Scene {
  constructor() {
    super('preloader')
  }
  preload() {
    this.load.image('tiles', 'assets/tile/dungeon_tiles.png')
    this.load.tilemapTiledJSON('dungeon', 'assets/tile/dungeon-01.json')
    this.load.atlas('fauna', 'assets/character/player/fauna.png', 'assets/character/player/fauna.json')
    this.load.atlas('lizard', 'assets/character/enemy/lizard/lizard.png', 'assets/character/enemy/lizard/lizard.json')
    this.load.atlas('health', 'assets/ui/health.png', 'assets/ui/health.json')
    this.load.image('heart-full', 'assets/ui/ui_heart_full.png')
    this.load.image('heart-half', 'assets/ui/ui_heart_half.png')
    this.load.image('heart-empty', 'assets/ui/ui_heart_empty.png')
  }
  create() {
    this.anims.create({
      key: 'fauna-idle-up',
      frames: [{
        key: 'fauna',
        frame: 'walk-up-3.png'
      }]
    })
    this.anims.create({
      key: 'fauna-idle-down',
      frames: [{
        key: 'fauna',
        frame: 'walk-down-3.png'
      }]
    })
    this.anims.create({
      key: 'fauna-idle-side',
      frames: [{
        key: 'fauna',
        frame: 'walk-side-3.png'
      }]
    })

    this.anims.create({
      key: 'fauna-run-down',
      frames: this.anims.generateFrameNames('fauna', {
        start: 1,
        end: 8,
        prefix: 'run-down-',
        suffix: '.png'
      }),
      repeat: -1,
      frameRate: 12
    })
    this.anims.create({
      key: 'fauna-run-up',
      frames: this.anims.generateFrameNames('fauna', {
        start: 1,
        end: 8,
        prefix: 'run-up-',
        suffix: '.png'
      }),
      repeat: -1,
      frameRate: 12
    })
    this.anims.create({
      key: 'fauna-run-side',
      frames: this.anims.generateFrameNames('fauna', {
        start: 1,
        end: 8,
        prefix: 'run-side-',
        suffix: '.png'
      }),
      frameRate: 12,
      repeat: -1
    })

    // enemy lizard

    this.anims.create({
      key: 'lizard-idle',
      frames: this.anims.generateFrameNames('lizard', {
        start: 0,
        end: 3,
        prefix: 'lizard_m_idle_anim_f',
        suffix: '.png'
      }),
      frameRate: 6,
      repeat: -1
    })

    this.anims.create({
      key: 'lizard-run',
      frames: this.anims.generateFrameNames('lizard', {
        start: 0,
        end: 3,
        prefix: 'lizard_m_run_anim_f',
        suffix: '.png'
      }),
      frameRate: 12,
      repeat: -1
    })
    //UI 
    this.anims.create({
      key: 'ui_heart_full',
      frames: [{
        key: 'heart',
        frame: 'ui_heart_full.png'
      }]
    })
    this.anims.create({
      key: 'ui_heart_empty',
      frames: [{
        key: 'heart',
        frame: 'ui_heart_empty.png'
      }]
    })
    this.anims.create({
      key: 'ui_heart_half',
      frames: [{
        key: 'heart',
        frame: 'ui_heart_half.png'
      }]
    })
    // loading completed
    this.scene.start('Scene1')
  }
}