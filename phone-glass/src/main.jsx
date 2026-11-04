import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, Glass, Switch, TabBar } from "glisse";
import "glisse/styles.css";
import "./style.css";

const appLinks = [
  { name: "Phone", icon: "☎", color: "coral", href: "tel:" },
  { name: "Messages", icon: "✉", color: "blue", href: "sms:" },
  { name: "Camera", icon: "◉", color: "pink", href: "intent:#Intent;action=android.media.action.IMAGE_CAPTURE;end" },
  { name: "Gallery", icon: "▧", color: "purple", href: "content://media/external/images/media" },
  { name: "Chrome", icon: "◌", color: "blue", href: "https://www.google.com/chrome/" },
  { name: "YouTube", icon: "▶", color: "red", href: "https://youtube.com" },
  { name: "Spotify", icon: "♫", color: "green", href: "https://open.spotify.com" },
  { name: "Settings", icon: "⚙", color: "slate", href: "intent:#Intent;action=android.settings.SETTINGS;end" }
];

function App() {
  const [tab, setTab] = useState("home");
  const [now, setNow] = useState(new Date());
  const [focus, setFocus] = useState(() => localStorage.getItem("glass-focus") === "true");
  const [quiet, setQuiet] = useState(() => localStorage.getItem("glass-quiet") === "true");
  const [brightness, setBrightness] = useState(() => Number(localStorage.getItem("glass-brightness") || 72));
  const [note, setNote] = useState(() => localStorage.getItem("glass-note") || "");
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => localStorage.setItem("glass-focus", String(focus)), [focus]);
  useEffect(() => localStorage.setItem("glass-quiet", String(quiet)), [quiet]);
  useEffect(() => localStorage.setItem("glass-brightness", String(brightness)), [brightness]);
  useEffect(() => localStorage.setItem("glass-note", note), [note]);

  const time = useMemo(() => new Intl.DateTimeFormat("en-MY", { hour: "2-digit", minute: "2-digit", hour12: false }).format(now), [now]);
  const date = useMemo(() => new Intl.DateTimeFormat("en-MY", { weekday: "long", day: "numeric", month: "long" }).format(now), [now]);

  useEffect(() => {
    if ("serviceWorker" in navigator && import.meta.env.PROD) {
      navigator.serviceWorker.register("/ai-creative-studio/phone/sw.js").catch(() => {});
    }
    const handler = () => setInstalled(true);
    window.addEventListener("appinstalled", handler);
    return () => window.removeEventListener("appinstalled", handler);
  }, []);

  const openApp = (href) => {
    if (href.startsWith("intent:") && !/android/i.test(navigator.userAgent)) return;
    window.location.href = href;
  };

  return <main className="wallpaper">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grain" />
    <header className="statusbar"><span>{time}</span><span className="status-icons">◈  ▰  ▴</span></header>

    <div className="screen-content">
      {tab === "home" && <>
        <section className="hero">
          <p className="eyebrow">THURSDAY · YOUR SPACE</p>
          <div className="clock">{time}</div>
          <p className="date">{date}</p>
          <Glass className="weather-card">
            <div><span className="weather-icon">☀</span><div><strong>Good day, Adam</strong><small>Your day, in one calm glance.</small></div></div>
            <span className="weather-temp">A15</span>
          </Glass>
        </section>

        <section className="section-head"><span>Favourites</span><small>YOUR APPS</small></section>
        <div className="app-grid">
          {appLinks.map(app => <button className="app-shortcut" key={app.name} onClick={() => openApp(app.href)}>
            <span className={"app-icon " + app.color}>{app.icon}</span><span>{app.name}</span>
          </button>)}
        </div>

        <Glass className="quick-card">
          <div className="quick-top"><div><span className="eyebrow">QUICK NOTE</span><strong>A little space for your thoughts</strong></div><span className="note-dot">✦</span></div>
          <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Write something to remember…" rows="2" />
          <small className="saved-label">Saved on this device automatically</small>
        </Glass>
      </>}

      {tab === "widgets" && <section className="page-section">
        <p className="eyebrow">YOUR GLASS SPACE</p><h1>Widgets</h1><p className="muted">A quiet overview of the things you use most.</p>
        <Glass className="widget-large"><span className="widget-symbol">◷</span><span className="eyebrow">LOCAL TIME</span><div className="widget-time">{time}</div><p>{date}</p></Glass>
        <div className="two-widgets"><Glass><span className="widget-symbol">✦</span><strong>Focus mode</strong><small>{focus ? "Enabled" : "Ready when you are"}</small></Glass><Glass><span className="widget-symbol">☾</span><strong>Quiet mode</strong><small>{quiet ? "Enabled" : "Notifications as usual"}</small></Glass></div>
        <Glass className="tip-card"><strong>Make it yours</strong><p>Pin your favourite apps to the first screen and keep this space simple.</p></Glass>
      </section>}

      {tab === "control" && <section className="page-section">
        <p className="eyebrow">SYSTEM SHORTCUTS</p><h1>Control</h1><p className="muted">These switches save your preferences in this web app. They do not change Android system settings.</p>
        <Glass className="control-card"><div><strong>Focus mode</strong><small>Keep this dashboard distraction-light</small></div><Switch checked={focus} onCheckedChange={setFocus} aria-label="Focus mode" /></Glass>
        <Glass className="control-card"><div><strong>Quiet mode</strong><small>Visual preference for a calmer space</small></div><Switch checked={quiet} onCheckedChange={setQuiet} aria-label="Quiet mode" /></Glass>
        <Glass className="brightness-card"><div className="control-heading"><strong>Brightness preference</strong><span>{brightness}%</span></div><input type="range" min="10" max="100" value={brightness} onChange={e => setBrightness(Number(e.target.value))} /></Glass>
        <Glass className="about-card"><strong>Glass Home · A15</strong><p>Powered by Glisse, React and GitHub Pages. Designed as a companion interface, not a replacement for One UI.</p><a href="https://github.com/0kzh/glisse" target="_blank" rel="noreferrer">Glisse open-source project ↗</a></Glass>
      </section>}
    </div>

    <Glass className="bottom-dock"><TabBar value={tab} onValueChange={setTab} items={[
      { value: "home", label: "Home", icon: <span>⌂</span> },
      { value: "widgets", label: "Widgets", icon: <span>▦</span> },
      { value: "control", label: "Control", icon: <span>☷</span> }
    ]} /></Glass>
    <footer className="home-indicator"><span /></footer>
  </main>;
}

createRoot(document.getElementById("root")).render(<App />);