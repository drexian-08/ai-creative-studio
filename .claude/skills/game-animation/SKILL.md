---
name: game-animation
description: Create and polish responsive game character and object animation, including locomotion, state transitions, timing, blending, and animation controllers.
---
# Game Animation

## Workflow
1. Inspect rig, skeleton, animation clips, controller/state machine, root-motion setup, and engine conventions.
2. Identify the intended action and gameplay context before changing timing or transitions.
3. Define states and transitions explicitly: idle, walk, run, start, stop, turn, jump, fall, land, crouch, interact, and hit where relevant.
4. Use appropriate blend trees or equivalent systems; avoid abrupt snapping and conflicting animation ownership.
5. Check foot planting, root motion, hand contacts, ground alignment, anticipation, follow-through, and secondary motion.
6. Test at different movement speeds, turning angles, slopes, and frame rates.

## Principles
- Animation must communicate intent and remain responsive to player input.
- Prefer clean transitions, sensible blend durations, and stable locomotion matching.
- Avoid foot sliding, floating, clipping, pose popping, and excessive motion.
- Keep gameplay-critical hitboxes and root motion predictable.
- Use procedural motion only when it improves flexibility without introducing jitter.

## Output
List clips/states changed, transition logic, parameters, test cases, and any remaining visual artifacts. Never claim an animation was rendered or previewed unless it was.
