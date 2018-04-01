import { Player } from "../actors/player/player.class";
import { Controls } from "./keyboard.model";

export class KeyBoardControl {
	public gameControls: Controls;

	constructor(private gameInstance: any, private playerInstance: Player) {
		this.gameControls = {
			cursors: this.gameInstance.input.keyboard.addKeys(
				{
					'up': Phaser.KeyCode.W,
					'down': Phaser.KeyCode.S,
					'left': Phaser.KeyCode.A,
					'right': Phaser.KeyCode.D
				}
				),
			fireWeapon: this.gameInstance.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR)
		};
	}

	public update(): void {
		if (!this.playerInstance.player.alive) {
			return;
		}
		this.playerInstance.playerState.set("fire", false);

		if (this.gameControls.cursors.up.isDown) {
			this.playerInstance.player.position.add(0, -10);
			this.playerInstance.player.animations.play("accelerating");
			this.playerInstance.playerState.set("moving", true);
		} else {
			this.playerInstance.player.body.acceleration.set(0);
			this.playerInstance.playerState.set("moving", false);
		}

		if (this.gameControls.cursors.down.isDown){
			this.playerInstance.player.position.add(0, 10);
			this.playerInstance.player.animations.play("accelerating");
			this.playerInstance.playerState.set("moving", true);
		}

		if (this.gameControls.cursors.left.isDown) {
			this.playerInstance.player.position.add(-10, 0);
			this.playerInstance.player.animations.play("accelerating");
			this.playerInstance.playerState.set("moving", true);
		} else if (this.gameControls.cursors.right.isDown) {
			this.playerInstance.player.position.add(10, 0);
			this.playerInstance.player.animations.play("accelerating");
			this.playerInstance.playerState.set("moving", true);
		} else {
			this.playerInstance.player.body.angularVelocity = 0;
		}

		if (this.gameControls.fireWeapon.isDown) {
			if (this.playerInstance.projectile) {
				this.playerInstance.projectile.fireWeapon();
				this.playerInstance.playerState.set("fire", true);
				this.playerInstance.playerState.set("ammo", this.playerInstance.projectile.bulletCount);
			} else {
				this.playerInstance.playerState.set("fire", false);
			}
		}
	}
}
