document.addEventListener("DOMContentLoaded", function() {

	const config = {
		type: Phaser.CANVAS,
		disableContextMenu: true,
		scale: {
			mode: Phaser.Scale.ScaleModes.NONE,
			parent: "div1",
			width: 800,
			height: 600,
		},
		transparent: true
	};

	const game = new Phaser.Game(config);

	class Scene1 extends Phaser.Scene {

		preload() {
			this.load.image("wheel","assets/wheel.png");
		}

		create() {
			this.imgwheel = this.add.image(400,300,"wheel")
				.setDisplayOrigin(415,422)
				.setScale(0.5);

			//this.rotateWheel();
		}

		rotateWheel() {
			this.tweens.add({
				targets: this.imgwheel,
				angle: 360 * 20,
				duration: 10000,
				ease: "Quart.easeInOut"
			});
		}
	}

	const sc1 = new Scene1();
	game.scene.add("scene1", sc1, true);


	const config2 = {
		type: Phaser.CANVAS,
		disableContextMenu: true,
		scale: {
			mode: Phaser.Scale.ScaleModes.NONE,
			parent: "div2",
			width: 100,
			height: 100,
		},
		transparent: true
	};

	const buttons_canvas = new Phaser.Game(config2);

	class Scene2 extends Phaser.Scene {

		preload() {
			this.load.image("spinner","assets/spin.png");
		}

		create() {
			this.btnspin = this.add.image(25,30,"spinner")
				.setInteractive();

			this.input.on("gameobjectup", (p,go)=>{
				if (go == this.btnspin) {
					sc1.rotateWheel();
				}
			});
		}

	}

	const sc2 = new Scene2();
	buttons_canvas.scene.add("scene2", sc2, true);

});




