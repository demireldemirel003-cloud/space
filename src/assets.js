export default {
    'audio': {
        // To add real sound effects, download CC0 sounds and place them in assets/sounds/
        // Recommended sources:
        // - https://opengameart.org/ (search for "8-bit laser", "explosion")
        // - https://pixabay.com/sound-effects/ 
        // - https://creazilla.com (CC0 license)
        // 
        // Uncomment these when you have the sound files:
        // shoot: {
        //     key: 'shoot',
        //     args: ['assets/sounds/laser.wav']
        // },
        // explosion: {
        //     key: 'explosion_sound',
        //     args: ['assets/sounds/explosion.wav']
        // },
        // enemy_hit: {
        //     key: 'enemy_hit',
        //     args: ['assets/sounds/hit.wav']
        // }
    },
    'image': {
        // Add background image when available
        // background: {
        //     key: 'background',
        //     args: ['assets/space_background.png']
        // },
    },
    'spritesheet': {
        ships: {
            key: 'ships',
            args: ['assets/ships.png', {
                frameWidth: 64,
                frameHeight: 64,
            }]
        },
        tiles: {
            key: 'tiles',
            args: ['assets/tiles.png', {
                frameWidth: 32,
                frameHeight: 32
            }]
        },
    }
};