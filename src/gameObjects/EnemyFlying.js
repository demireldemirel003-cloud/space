import ASSETS from '../assets.js';

export default class EnemyFlying extends Phaser.Physics.Arcade.Sprite {
    health = 1; // enemy health
    fireCounterMin = 100; // minimum fire rate
    fireCounterMax = 300; // maximum fire rate
    fireCounter;
    power = 1; // enemy strength

    // path coordinates for enemy to follow
    paths = [
        [[200, -50], [1080, 160], [200, 340], [1080, 520], [200, 700], [1080, 780]],
        [[-50, 200], [1330, 200], [1330, 400], [-50, 400], [-50, 600], [1330, 600]],
        [[-50, 360], [640, 50], [1180, 360], [640, 670], [50, 360], [640, 50], [1180, 360], [640, 670], [-50, 360]],
        [[1330, 360], [640, 50], [50, 360], [640, 670], [1180, 360], [640, 50], [50, 360], [640, 670], [1330, 360]],
    ]

    constructor(scene, shipId, pathId, speed, power) {
        const startingId = 12;
        super(scene, 500, 500, ASSETS.spritesheet.ships.key, startingId + shipId);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.power = power;
        
        // Set health based on ship type and power
        // Different ship IDs have different base health
        const baseHealthByShipId = {
            0: 1,  // Light fighter
            1: 1,  // Light fighter
            2: 2,  // Medium fighter
            3: 2,  // Medium fighter
            4: 3,  // Heavy fighter
            5: 3,  // Heavy fighter
            6: 1,  // Fast scout
            7: 2,  // Assault ship
            8: 4,  // Heavy bomber
            9: 4,  // Heavy bomber
            10: 5, // Boss-type ship
            11: 5  // Boss-type ship
        };
        
        this.health = (baseHealthByShipId[shipId] || 1) + Math.floor(power / 2);
        this.maxHealth = this.health;
        
        // Create health bar for enemies with more than 1 health
        if (this.maxHealth > 1) {
            this.healthBar = scene.add.graphics();
            this.healthBar.setDepth(15);
            this.updateHealthBar();
        }
        
        this.fireCounter = Phaser.Math.RND.between(this.fireCounterMin, this.fireCounterMax); // random firing interval
        this.setFlipY(true); // flip image vertically
        this.setDepth(10);
        this.scene = scene;

        this.initPath(pathId, speed); // choose path to follow
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        if (this.pathIndex > 1) {
            this.die();
            return; // stop updating if reached end of path
        }

        this.path.getPoint(this.pathIndex, this.pathVector); // get current coordinate based on percentage moved

        this.setPosition(this.pathVector.x, this.pathVector.y); // set position of this enemy
        
        // Check world bounds - destroy enemies that go too far off screen
        if (this.y > this.scene.scale.height + 100 || 
            this.x < -100 || 
            this.x > this.scene.scale.width + 100) {
            this.die();
            return;
        }
        
        // Update health bar position if it exists
        if (this.healthBar) {
            this.updateHealthBar();
        }

        this.pathIndex += this.pathSpeed; // increment percentage moved by pathSpeed

        // update firing interval
        if (this.fireCounter > 0) this.fireCounter--;
        else {
            this.fire();
        }
    }

    hit(damage) {
        this.health -= damage;
        
        // Flash red when hit but not destroyed
        if (this.health > 0) {
            this.setTint(0xff0000);
            this.scene.time.delayedCall(100, () => {
                this.clearTint();
            });
            
            // Update health bar
            if (this.healthBar) {
                this.updateHealthBar();
            }
        }

        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        // Prevent multiple calls to die()
        if (!this.active) return;
        
        this.scene.addExplosion(this.x, this.y);
        
        // Clean up health bar
        if (this.healthBar) {
            this.healthBar.destroy();
            this.healthBar = null;
        }
        
        // Remove from scene
        this.scene.removeEnemy(this);
    }

    fire() {
        // Don't fire if enemy is behind the player (below player's Y position + some margin)
        const playerY = this.scene.player ? this.scene.player.y : this.scene.scale.height - 100;
        if (this.y > playerY + 50) {
            return; // Enemy is too far behind player
        }
        
        this.fireCounter = Phaser.Math.RND.between(this.fireCounterMin, this.fireCounterMax);
        this.scene.fireEnemyBullet(this.x, this.y, this.power);
    }

    initPath(pathId, speed) {
        const points = this.paths[pathId];

        this.path = new Phaser.Curves.Spline(points);
        this.pathVector = new Phaser.Math.Vector2(); // current coordinates along path in pixels
        this.pathIndex = 0; // percentage of position moved along path, 0 = beginning, 1 = end
        this.pathSpeed = speed; // speed of movement

        this.path.getPoint(0, this.pathVector); // get coordinates based on pathIndex

        this.setPosition(this.pathVector.x, this.pathVector.y);
    }

    getPower() {
        return this.power;
    }

    remove() {
        this.scene.removeEnemy(this);
    }
    
    updateHealthBar() {
        if (!this.healthBar) return;
        
        this.healthBar.clear();
        
        const barWidth = 32;
        const barHeight = 4;
        const barX = this.x - barWidth / 2;
        const barY = this.y - 40;
        
        // Background (red)
        this.healthBar.fillStyle(0x660000);
        this.healthBar.fillRect(barX, barY, barWidth, barHeight);
        
        // Health (green to red based on health percentage)
        const healthPercent = this.health / this.maxHealth;
        const healthWidth = barWidth * healthPercent;
        
        if (healthPercent > 0.6) {
            this.healthBar.fillStyle(0x00ff00); // Green
        } else if (healthPercent > 0.3) {
            this.healthBar.fillStyle(0xffff00); // Yellow
        } else {
            this.healthBar.fillStyle(0xff0000); // Red
        }
        
        this.healthBar.fillRect(barX, barY, healthWidth, barHeight);
    }
}