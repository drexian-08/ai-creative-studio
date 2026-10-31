#!/usr/bin/env python3
"""Create a project workspace using only the Python standard library.

Usage:
  python scripts/new_project.py "My Short Film" --type video
  python scripts/new_project.py "Tiny Adventure" --type game
"""
from __future__ import annotations
import argparse
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEMPLATE = ROOT / "templates" / "creative-brief.md"

def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    if not slug:
        raise ValueError("Project title must contain letters or numbers.")
    return slug

def main() -> None:
    parser = argparse.ArgumentParser(description="Create a project workspace.")
    parser.add_argument("title", help="Project title")
    parser.add_argument("--type", default="other",
                        choices=["game", "3d-animation", "2d-animation", "video", "education", "other"])
    parser.add_argument("--output", default="projects", help="Output directory")
    args = parser.parse_args()

    target = Path(args.output) / slugify(args.title)
    if target.exists():
        parser.error(f"Target already exists: {target}")
    for folder in [
        "references", "source", "assets/audio", "assets/images", "assets/models",
        "assets/video", "storyboards", "scenes", "exports", "notes", "licenses"
    ]:
        (target / folder).mkdir(parents=True, exist_ok=True)

    brief = TEMPLATE.read_text(encoding="utf-8")
    brief = brief.replace("# Creative Brief", f"# Creative Brief — {args.title}", 1)
    brief = brief.replace("- **Type:** Game / 3D animation / 2D animation / video / educational content / other",
                          f"- **Type:** {args.type}", 1)
    (target / "brief.md").write_text(brief, encoding="utf-8")
    (target / "README.md").write_text(
        f"# {args.title}\n\nProject type: {args.type}\n\n"
        "Fill in brief.md, plan the work, and keep editable source files separate from exports.\n",
        encoding="utf-8"
    )
    print(f"Created project workspace: {target}")

if __name__ == "__main__":
    main()
