import Phaser from 'phaser'
export default class StartScene extends Phaser.Scene{
    constructor(){
        super('start-scene')
    }
    init(data){
        this.replayButton = undefined
        this.score = data.score
    }
    preload(){
        this.load.image('background','images/bg_layer1.png')
        this.load.image('title','images/title.png')
        this.load.image('play-button','images/play.png')
    }
    create(){
        this.add.image(200,320,'background')
        this.add.image(220,200,'title')
        this.playButton = this.add.image(210,400,'play-button')
                .setInteractive().setScale(0.5)
        this.playButton.once('pointerup', () => {
                    this.scene.start('corona-buster-scene')
        }, this)
    }
}