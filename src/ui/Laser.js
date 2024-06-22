import Phaser from 'phaser'
export default class Laser extends
Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, texture){
        super(scene, x, y, texture)
        this.setScale(2)
    }
    fire(x, y){
        this.setPosition(x+40,y)
        this.setActive(true)
        this.setVisible(true)
    }
    die(){
        this.destroy()
    }
    update(time){
        this.setVelocityX(200)
        if (this.x <-10){
            this.die()
        }
    }
}