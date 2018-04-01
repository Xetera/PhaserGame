import {Game} from '../game/game.class';
import {LifeCycle} from './lifecycle';

export class PhaserGame extends Game implements LifeCycle {
    private readonly game: Phaser.Game;
    private readonly dpr: number;
    constructor() {
        super();
        this.dpr = Math.round(window.devicePixelRatio);

        this.game = new Phaser.Game(
          window.innerWidth * this.dpr,
          window.innerHeight * this.dpr,
          Phaser.AUTO,
          'space-shooter',
          {
            preload: this.preload,
            create: this.create,
            update: this.update
          }
        );
    }

    public preload(): void {
        const game = this.game.load;
        game.crossOrigin = 'anonymous';
        game.image('space', 'assets/background.jpg');
        game.image('laser', 'assets/bullet.png');
        game.spritesheet('dust', 'assets/dust.png', 64, 64, 16);
        game.spritesheet('kaboom', 'assets/explosions.png', 64, 64, 16);
        game.spritesheet('kaboom-big', 'assets/explosions-big.png', 152, 152, 16);
        game.image('pickup', 'assets/pickup.png');
        game.spritesheet('shooter-sprite', 'assets/ship.png', 32, 32);
        game.spritesheet('shooter-sprite-enemy', 'assets/ship-enemy.png', 32, 32);
        game.spritesheet('asteroid', 'assets/asteroids.png', 128, 128, 31);
    }

    public create(): void {
        super.properties(this.game);
        super.manageAssets(this.game);
    }

    public update(): void {
        super.gameUpdate(this.game);
    }

    public get gameInstance(): Phaser.Game {
        return this.game;
    }

}
