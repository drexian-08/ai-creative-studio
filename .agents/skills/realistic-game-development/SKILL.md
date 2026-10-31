---
name: realistic-game-development
description: Plan and build believable, polished game experiences. Use when creating or improving game projects, gameplay systems, environments, physics, interaction, or game architecture.
---
# Realistic Game Development

## Workflow
1. Inspect the project, engine/version, target platform, existing architecture, assets, and available tests. Do not assume Unity, Unreal, Godot, or a framework.
2. Clarify the core player experience and define a small playable milestone.
3. Propose the architecture before broad changes. Preserve existing conventions and avoid unnecessary dependencies.
4. Build in vertical slices: input → gameplay → feedback → UI → save/load → polish.
5. Use believable scale, lighting, materials, collision, audio, and environmental storytelling. Realism must not reduce readability or fun.
6. Add graceful fallbacks for missing assets and unsupported hardware.
7. Test the actual build or scene where possible; report what was and was not verified.

## Quality bar
- Responsive controls and predictable physics.
- Consistent world scale, collision, lighting, and material response.
- Clear visual hierarchy and readable player feedback.
- Stable frame pacing; profile before optimizing.
- No fake claims about testing, performance, or completeness.

## Performance
Use LODs, occlusion/frustum culling, instancing, texture compression, sensible shadow distance, baked lighting where suitable, and pooled objects for frequent spawns. Offer low/medium/high presets. On integrated GPUs or 8 GB RAM, start with conservative settings and small test scenes.

## Deliverables
Summarize changed files, how to run the project, controls, tests performed, known limitations, and the next smallest useful milestone.
