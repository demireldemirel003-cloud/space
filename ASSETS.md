# Free Game Assets Sources

This file contains links to free assets you can use to enhance your shoot 'em up game.

## 🎵 Sound Effects

### Recommended Free Sources:
1. **OpenGameArt.org** - https://opengameart.org/
   - Search for "8-bit", "laser", "explosion", "shoot"
   - All assets are properly licensed for games
   - CC0 and CC-BY licensed content available

2. **Pixabay** - https://pixabay.com/sound-effects/
   - High quality sound effects
   - Free for commercial use
   - Search terms: "8-bit", "retro game", "laser", "explosion"

3. **Freesound.org** - https://freesound.org/
   - Massive library of sounds
   - Requires attribution for most sounds
   - Great search and filtering options

### Specific Sounds Needed:
- Player laser/pew sound
- Enemy explosion
- Enemy laser sound
- Background music (optional)
- Player hit sound
- Power-up sound

## 🎨 Sprite Assets

### Spaceship Sprites:
1. **Kenney.nl** - https://kenney.nl/assets
   - High quality game assets
   - Free for commercial use
   - "Space Shooter Redux" pack recommended

2. **OpenGameArt.org Spaceships**:
   - "200+ CC0 Spaceship Sprites" - https://opengameart.org/content/200-cc0-spaceship-sprites
   - "Spaceships 32x32" - https://opengameart.org/content/spaceships-32x32

3. **CraftPix Free Assets** - https://craftpix.net/freebies/
   - "Free Spaceship Pixel Art Sprite Sheets"
   - "Free Pixel Art Enemy Spaceship 2D Sprites"

### Background Assets:
1. **Space Backgrounds**:
   - Search for "seamless space background"
   - "starfield texture"
   - "nebula background"

2. **Particle Effects**:
   - Explosion sprite sheets
   - Star particle textures
   - Laser beam effects

## 🎮 Additional Game Assets

### UI Elements:
- Health bar sprites
- Score display backgrounds
- Button sprites for menus
- Power-up icons

### Power-up Ideas:
- Shield power-up
- Rapid fire
- Multi-shot
- Health restore
- Score multiplier

## 📝 Asset Integration Guide

### Adding Sound Effects:

1. Download sound files (preferably .wav or .ogg)
2. Place in `assets/sounds/` folder
3. Uncomment and update `src/assets.js`:
```javascript
'audio': {
    shoot: {
        key: 'shoot',
        args: ['assets/sounds/shoot.wav']
    },
    explosion: {
        key: 'explosion_sound',
        args: ['assets/sounds/explosion.wav']
    }
}
```

4. Play sounds in game code:
```javascript
this.sound.play('shoot');
```

### Adding New Sprites:

1. Download sprite sheet
2. Place in `assets/` folder
3. Add to `src/assets.js`:
```javascript
'spritesheet': {
    newSprites: {
        key: 'newSprites',
        args: ['assets/newsprites.png', {
            frameWidth: 32,
            frameHeight: 32
        }]
    }
}
```

### Recommended Asset Specifications:

**Spaceships**: 32x32 or 64x64 pixels
**Bullets**: 8x16 to 16x32 pixels
**Explosions**: 32x32 to 64x64 pixels (animation frames)
**Backgrounds**: Tileable textures, any size
**Sounds**: 16-bit, 44.1kHz, short duration (under 2 seconds)

## ⚖️ License Considerations

Always check the license of assets:
- **CC0**: No attribution required, free for any use
- **CC-BY**: Attribution required, free for any use
- **CC-BY-SA**: Attribution required, share-alike
- **MIT/BSD**: Usually just requires attribution
- **Public Domain**: Free for any use

Remember to:
1. Read the full license text
2. Provide proper attribution when required
3. Keep records of where you got each asset
4. Consider creating a credits file

## 🔧 Asset Optimization

### File Size Optimization:
- Use PNG for sprites with transparency
- Use JPG for large backgrounds without transparency
- Compress images to reduce file size
- Use audio compression (OGG/MP3) for sounds

### Performance Tips:
- Keep sprite sheets organized and compact
- Use power-of-2 dimensions when possible
- Avoid too many simultaneous sound effects
- Preload all assets in the Preloader scene

Happy game developing! 🚀