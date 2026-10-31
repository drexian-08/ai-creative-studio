# AI Creative Studio

A practical, agent-agnostic creative production toolkit for building realistic games, polished animation, edited videos, and child-friendly educational media.

## Agent support

Skills are mirrored in the project skill locations used by:
- OpenAI Codex: `.agents/skills/`
- Claude Code: `.claude/skills/`
- GitHub Copilot: `.github/skills/`

Each skill is a self-contained directory with a `SKILL.md`. The instructions are intentionally tool-aware but engine/editor-neutral: the agent should inspect the actual project and installed tools before choosing an implementation.

## Skill library

| Skill | Use it for |
|---|---|
| `realistic-game-development` | Game architecture, believable worlds, gameplay systems, and production workflows |
| `game-animation` | Responsive character movement, locomotion, transitions, and animation polish |
| `3d-animation-production` | 3D scenes, rigging, lighting, rendering, and efficient animation pipelines |
| `video-editing` | Editing plans, pacing, transitions, captions, audio, and export |
| `kids-educational-content` | Safe, age-appropriate educational stories, lessons, and interactive content |
| `storyboard-and-shot-planning` | Visual storytelling, shot lists, camera language, and production-ready storyboards |
| `character-and-world-design` | Cohesive characters, environments, props, and visual direction |
| `creative-quality-review` | QA for visual quality, continuity, accessibility, performance, and delivery |

## Working principles

1. Inspect the repository and identify its engine, frameworks, assets, and constraints before editing.
2. Prefer a small working prototype over a large untested implementation.
3. Make visuals purposeful: clear silhouettes, readable motion, consistent lighting, and coherent art direction.
4. For children, prioritize safety, clarity, kindness, inclusion, and learning outcomes.
5. Respect licensing and provenance. Do not imitate protected characters, logos, or living artists' styles.
6. Verify the result with available tests, previews, renders, or reproducible manual checks.
7. Be resource-aware. Prefer scalable workflows, proxies, baked lighting, LODs, and efficient assets when hardware is limited.

## Hardware-aware defaults

When the user's machine is modest (for example, integrated graphics and 8 GB RAM), avoid assuming heavy real-time ray tracing, high-poly scenes, or large local AI models. Offer lightweight settings and cloud/render-farm alternatives only when appropriate. Never promise a target frame rate without measuring it.

## How to use

Ask an agent to perform a task naturally, for example:
- "Build a small realistic third-person game prototype."
- "Polish the character's run, jump, and landing animations."
- "Create a 30-second educational video for primary-school children."
- "Review this scene for visual consistency and performance."

The agent should select the matching skill automatically where supported, or you can explicitly invoke its skill name.
