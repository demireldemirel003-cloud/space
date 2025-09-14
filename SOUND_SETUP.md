# Quick Sound Setup Guide

## Free CC0 Sound Sources (No Attribution Required)

### 1. Creazilla (Easiest - Direct Downloads)
- **Laser Sound**: https://creazilla.com/media/audio/15450953/laser-gun-shot
- **More Laser Effects**: https://creazilla.com/media/audio/15463475/laser-effect-contact-mic
- Search "laser", "explosion", "8-bit" for more

### 2. OpenGameArt.org
- Search for "8-bit sound effects"
- Look for CC0 or Public Domain license
- Download .wav or .ogg files

### 3. Pixabay
- Go to https://pixabay.com/sound-effects/
- Search "laser", "explosion", "8-bit", "retro game"
- Download as .wav format

## Quick Setup Instructions

1. **Download 3 sound files**:
   - `laser.wav` (for player shooting)
   - `explosion.wav` (for explosions)
   - `hit.wav` (for enemy hits)

2. **Place them in**: `assets/sounds/` folder

3. **Update the game**:
   - Open `src/assets.js`
   - Uncomment the audio section
   - Update file paths if needed

4. **Replace generated sounds**:
   - The game currently uses procedurally generated 8-bit sounds
   - Real sound files will automatically replace them when loaded

## Current Sound Status
✅ **Procedural 8-bit sounds are working**:
- Laser shooting sound
- Explosion effects  
- Enemy hit feedback

🎵 **To add real sounds**: Follow the steps above

## Sound File Requirements
- **Format**: .wav (preferred) or .ogg
- **Length**: 0.1-2 seconds 
- **Quality**: 16-bit, 44.1kHz recommended
- **License**: CC0 or Public Domain preferred