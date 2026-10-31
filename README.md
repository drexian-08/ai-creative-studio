# AI Creative Studio

**A beginner-friendly creative workshop powered by AI agents.** Use it to plan and create games, smooth animation, edited videos, storyboards, and safe educational content for children.

You do not need to know everything about coding or production. Start with an idea and ask your AI agent to guide you one small step at a time.

## Try the first playable game\n\nA simple 2D browser prototype is available at [Misi Kutip Bintang](examples/mini-game/index.html). Open the HTML file in a browser to play.\n\n## Publish the Studio as a website\n\nA GitHub Pages deployment workflow is included. It needs a one-time Pages setting by a repository owner; follow [publish-website.md](docs/publish-website.md).\n\n## Open the Studio dashboard

The first offline dashboard is at [studio/index.html](studio/index.html). Download the repository ZIP, extract it, and open that file in Chrome or Edge. See [dashboard instructions](studio/README.md). It builds a project brief and prompt locally; it does not generate media by itself yet.

## Start here

1. Open this repository in your AI coding assistant (Codex, Claude Code, or GitHub Copilot).
2. Open [START-HERE.md](docs/START-HERE.md).
3. Tell the assistant what you want to create. You can copy one of the prompts from [prompt-library.md](docs/prompt-library.md).
4. Ask it to create a brief and a small first prototype before making a huge project.

## What is included?

### Production skills
| Skill | Use it for |
|---|---|
| `realistic-game-development` | Realistic game planning, systems, environments, and prototypes |
| `game-animation` | Character movement, locomotion, blending, and animation polish |
| `3d-animation-production` | 3D scenes, rigging, cameras, lighting, and rendering |
| `video-editing` | Editing, pacing, captions, sound, and export |
| `kids-educational-content` | Safe, age-appropriate educational stories and lessons |
| `storyboard-and-shot-planning` | Storyboards, shot lists, camera plans, and continuity |
| `character-and-world-design` | Original characters, environments, props, and art direction |
| `creative-quality-review` | Quality, accessibility, safety, performance, and delivery review |

### Agent support
Skills are mirrored in:
- OpenAI Codex: `.agents/skills/`
- Claude Code: `.claude/skills/`
- GitHub Copilot: `.github/skills/`

Repository-wide instructions are in `AGENTS.md`, `CLAUDE.md`, and `.github/copilot-instructions.md`.

### Production tools
- [Production pipeline](docs/production-pipeline.md) — idea to final delivery.
- [Prompt library](docs/prompt-library.md) — ready-to-copy prompts.
- [Creative brief template](templates/creative-brief.md).
- [Storyboard template](templates/storyboard.md).
- [New project generator](scripts/new_project.py) — creates a tidy folder structure.

## Create a project folder

Install Python 3 if it is not already installed. From the repository folder, run:

```bash
python scripts/new_project.py "My First Game" --type game
```

Other supported types: `3d-animation`, `2d-animation`, `video`, `education`, and `other`.

## Hardware-aware defaults

The intended workflow is friendly to modest hardware, including a Ryzen 3 7320U, Radeon 610M integrated graphics, 8 GB RAM, and 512 GB SSD. Start with small scenes, low-resolution previews, compressed textures, simple lighting, proxies, and short renders. Do not assume large local AI models or demanding real-time graphics will run well. Use cloud services only after checking cost and privacy implications.

## Important principles

- Build a small working prototype before scaling up.
- Keep editable source files separate from final exports.
- Track asset sources and licenses.
- For children's content, prioritize safety, clarity, inclusion, and learning.
- Do not claim a render, test, or export succeeded unless it was actually verified.

## License

No blanket license is granted for third-party assets added by users. Check each asset's license and attribution requirements before distribution.
