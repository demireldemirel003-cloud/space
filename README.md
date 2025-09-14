# Phaser.js Shoot 'Em Up Game

A classic space shoot 'em up game built with Phaser.js featuring retro pixel art graphics, multiple weapons, and progressive difficulty.

## Features

### ✨ Game Features
- **Classic Shoot 'Em Up Gameplay**: Navigate your spaceship left/right and shoot enemies
- **Multiple Fire Modes**: Single, Double, and Triple shot modes
- **Progressive Difficulty**: Game gets harder as you advance levels
- **Health System**: Player has 3 lives with invulnerability after taking damage
- **Variable Enemy Health**: Different enemy types have different health amounts
- **Visual Feedback**: Enemy health bars, damage indicators, and explosion effects
- **8-bit Sound Effects**: Procedurally generated retro-style sounds
- **Score & Level System**: Track your progress and enemies defeated
- **Procedural Background**: Infinite scrolling space background
- **Enemy AI**: Different enemy movement patterns and behaviors

### 🎮 Controls
- **A Key**: Move left
- **D Key**: Move right
- **SPACE**: Shoot
- **1**: Single shot mode
- **2**: Double shot mode  
- **3**: Triple shot mode
- **SPACE**: Restart after game over

**Note**: Player movement is restricted to left/right only - no up/down movement!

## How to Run

### Method 1: Using Python Server (Recommended)
1. Make sure you have Python installed
2. Run the included server script:
   ```bash
   python server.py
   ```
3. Open your browser and go to `http://localhost:8000`

### Method 2: Using Node.js
If you have Node.js installed:
```bash
npx http-server -p 8000
```

### Method 3: Using PHP
If you have PHP installed:
```bash
php -S localhost:8000
```

### Method 4: Using any other local server
Any local web server will work. The game needs to be served over HTTP due to ES6 module requirements.

## Game Mechanics

### Player Ship
- **Health**: 3 lives (displayed as hearts)
- **Movement**: Smooth acceleration with drag
- **Invulnerability**: 2 seconds after taking damage
- **Fire Modes**: 
  - Single: One bullet straight ahead
  - Double: Two bullets spread apart
  - Triple: Three bullets in a spread pattern

### Enemies
- **Spawn in Groups**: Random formations with different paths
- **Variable Difficulty**: Strength, speed, and firing rate vary
- **Smart Pathing**: Follow curved paths across the screen
- **Return Fire**: Enemies shoot back at varying intervals

### Progression
- **Level Up**: Every 20 enemies defeated
- **Increased Speed**: Background scrolls faster each level
- **Score System**: 10 points per enemy destroyed
- **Difficulty Scaling**: More challenging enemy patterns

## File Structure

```
shoot'em/
├── index.html              # Main HTML file
├── phaser.js              # Phaser.js framework
├── server.py              # Python HTTP server script
├── assets/                # Game assets
│   ├── ships.png          # Spaceship sprites
│   └── tiles.png          # Background tiles and bullets
└── src/                   # Game source code
    ├── main.js           # Game configuration
    ├── assets.js         # Asset definitions
    ├── animation.js      # Animation configurations
    ├── scenes/           # Game scenes
    │   ├── Boot.js       # Boot scene
    │   ├── Preloader.js  # Asset loading
    │   ├── Start.js      # Start menu (unused)
    │   ├── Game.js       # Main game scene
    │   └── GameOver.js   # Game over scene
    └── gameObjects/      # Game entities
        ├── Player.js     # Player ship
        ├── PlayerBullet.js # Player bullets
        ├── EnemyFlying.js  # Flying enemies
        ├── EnemyBullet.js  # Enemy bullets
        └── Explosion.js    # Explosion effects
```

## Assets Used

The game currently uses free pixel art assets:
- **ships.png**: Contains spaceship sprites (12x12 grid, 64x64 pixels each)
- **tiles.png**: Contains background tiles, bullets, and explosion frames

### Adding Your Own Assets

To enhance the game with additional free assets:

1. **Sound Effects**: 
   - Add `.wav` or `.mp3` files to `assets/sounds/`
   - Uncomment audio sections in `src/assets.js`
   - Recommended sources:
     - [OpenGameArt.org](https://opengameart.org/)
     - [Pixabay](https://pixabay.com/sound-effects/)
     - [Freesound](https://freesound.org/)

2. **Additional Sprites**:
   - Add sprite sheets to `assets/`
   - Update `src/assets.js` with new sprite definitions
   - Recommended sources:
     - [OpenGameArt.org](https://opengameart.org/)
     - [Itch.io Free Assets](https://itch.io/game-assets/free)
     - [Craftpix Free Assets](https://craftpix.net/freebies/)

3. **Background Images**:
   - Add space backgrounds to `assets/`
   - Update the background in scenes

## Customization Ideas

### Easy Modifications
1. **Adjust Difficulty**: Modify spawn rates and enemy health in `Game.js`
2. **New Fire Modes**: Add more weapon types in `Player.js`
3. **More Enemy Types**: Create new enemy classes with different behaviors
4. **Power-ups**: Add collectible items that enhance player abilities
5. **Boss Battles**: Add large enemies with multiple phases

### Advanced Features
1. **Particle Systems**: Add trails and more visual effects
2. **Sound Integration**: Add background music and sound effects
3. **Local Storage**: Save high scores
4. **Mobile Support**: Add touch controls
5. **Multiplayer**: Add cooperative or competitive modes

## Credits

- **Framework**: [Phaser.js](https://phaser.io/) - HTML5 game framework
- **Assets**: Pixel art assets from [Kenney.nl](https://kenney.nl/) and similar sources
- **Inspiration**: Classic arcade shoot 'em up games

## License

This project is open source. Asset licenses may vary - check individual asset sources for their specific licenses.

## Troubleshooting

### Common Issues

1. **Game doesn't load**: 
   - Make sure you're serving the files over HTTP, not opening directly
   - Check browser console for errors

2. **Assets missing**:
   - Verify `assets/` folder contains `ships.png` and `tiles.png`
   - Check file paths in `assets.js`

3. **Controls not working**:
   - Click on the game area to focus it
   - Check if keyboard events are being captured

4. **Performance issues**:
   - Try reducing the number of simultaneous enemies
   - Lower the fire rate or bullet count

### Browser Compatibility
- Modern browsers with ES6 module support required
- Chrome, Firefox, Safari, and Edge all supported
- Internet Explorer not supported

## Future Enhancements

- [ ] Sound effects and background music
- [ ] More enemy types and patterns
- [ ] Power-up system
- [ ] Boss battles
- [ ] High score persistence
- [ ] Mobile touch controls
- [ ] Particle effects
- [ ] Multiple levels/stages

Enjoy playing your shoot 'em up game! 🚀