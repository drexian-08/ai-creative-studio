# ALEX & DREXIBOT

Browser-based 3D game prototype being developed for Android WebView / APK packaging.

## Current project baseline

- Main playable source: `index.html` (to be committed from the latest working game file)
- Android wrapper: WebView project in `android/`
- Language: Malay UI
- Target: Android phones, landscape orientation
- Rendering: Three.js WebGL

## Current gameplay systems

- Third-person exploration and vehicle gameplay
- Touch controls and landscape HUD
- NPC interactions and side quests
- Mission rewards and in-game money
- Minimap, weather and pause controls
- Local progress storage

## Next fixes / backlog

1. Mark the NPC who issued the active mission with a visible marker above their head.
2. Show the same NPC marker on the minimap while that mission is active.
3. Remove both markers only after the player returns to the issuing NPC and claims the reward.
4. Re-test the mission completion button on Android touch input.
5. Keep the pause button clear of the money HUD.
6. Expand side missions so they are not all robot-inspection tasks.

## Development notes

- Preserve existing gameplay and controls when changing mission systems.
- Test JavaScript syntax and the Android WebView flow after each change.
- Do not describe the game as fully offline until the Three.js dependency is bundled locally.
- Keep the HTML source and Android wrapper in this project folder so future changes can be tracked together.
