import ASSETS from '../assets.js';

export default class Player extends Phaser.Physics.Arcade.Sprite {
    velocityIncrement = 50;
    velocityMax = 500;
    drag = 1000;
    fireRate = 10;
    fireCounter = 0;
    health = 3; // Give player 3 lives
    maxHealth = 3;
    fireMode = 'single'; // 'single', 'double', 'triple'
    invulnerable = false;
    invulnerabilityTime = 120; // 2 seconds of invulnerability after hit

    constructor(scene, x, y, shipId) {
        super(scene, x, y, ASSETS.spritesheet.ships.key, shipId);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true); // prevent ship from leaving the screen
        this.setDepth(100); // make ship appear on top of other game objects
        this.scene = scene;
        this.setMaxVelocity(this.velocityMax); // limit maximum speed of ship
        this.setDrag(this.drag);
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        if (this.fireCounter > 0) this.fireCounter--;
        
        // Handle invulnerability blinking
        if (this.invulnerable) {
            this.invulnerabilityTime--;
            this.setAlpha(Math.sin(time * 0.05) * 0.5 + 0.5); // Blinking effect
            
            if (this.invulnerabilityTime <= 0) {
                this.invulnerable = false;
                this.setAlpha(1);
            }
        }

        this.checkInput();
    }

    checkInput() {
        const cursors = this.scene.cursors; // get cursors object from Game scene
        const aKey = this.scene.keys.A.isDown;
        const dKey = this.scene.keys.D.isDown;
        const spaceKey = cursors.space.isDown;

        const moveDirection = { x: 0, y: 0 }; // default move direction

        // Only allow left/right movement with A/D keys
        if (aKey) moveDirection.x--;
        if (dKey) moveDirection.x++;
        if (spaceKey) this.fire();

        this.body.velocity.x += moveDirection.x * this.velocityIncrement; // increase horizontal velocity
        // Remove vertical movement - player stays at same Y position
    }

    fire() {
        if (this.fireCounter > 0) return;

        this.fireCounter = this.fireRate;

        // Different firing modes
        switch (this.fireMode) {
            case 'single':
                this.scene.fireBullet(this.x, this.y);
                break;
            case 'double':
                this.scene.fireBullet(this.x - 15, this.y);
                this.scene.fireBullet(this.x + 15, this.y);
                break;
            case 'triple':
                this.scene.fireBullet(this.x, this.y);
                this.scene.fireBullet(this.x - 20, this.y);
                this.scene.fireBullet(this.x + 20, this.y);
                break;
        }
    }

    hit(damage) {
        if (this.invulnerable || !this.active) return; // Don't take damage while invulnerable or if destroyed
        
        // Ensure maximum 1 damage per hit to maintain 3-hit system
        const actualDamage = Math.min(damage, 1);
        this.health -= actualDamage;
        
        // Update health display safely
        if (this.scene && this.scene.updateHealthDisplay) {
            this.scene.updateHealthDisplay();
        }

        if (this.health > 0) {
            // Become invulnerable temporarily
            this.invulnerable = true;
            this.invulnerabilityTime = 120; // Reset invulnerability timer
        } else {
            this.die();
        }
    }

    die() {
        this.scene.addExplosion(this.x, this.y);
        
        // Trigger game over when player actually dies
        if (this.scene && this.scene.GameOver) {
            this.scene.GameOver();
        }
        
        this.destroy(); // destroy sprite so it is no longer updated
    }
}