#!/usr/bin/env python3
"""Small dependency-free smoke check for the offline studio dashboard."""
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "studio" / "index.html"

class DashboardParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.title_seen = False
        self.script_count = 0
        self.in_script = False
        self.script_text = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "title":
            self.title_seen = True
        if tag == "script":
            self.script_count += 1
            self.in_script = True

    def handle_endtag(self, tag):
        if tag == "script":
            self.in_script = False

parser = DashboardParser()
source = PAGE.read_text(encoding="utf-8")
parser.feed(source)
parser.close()
required = {"title", "idea", "generate", "output", "copy", "download"}
missing = sorted(required - parser.ids)
if missing:
    raise SystemExit(f"Dashboard missing required elements: {', '.join(missing)}")
if "<!doctype html>" not in source.lower():
    raise SystemExit("Dashboard is missing an HTML5 doctype.")
if parser.script_count < 1:
    raise SystemExit("Dashboard has no application script.")
print("Dashboard smoke check passed.")
