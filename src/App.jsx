import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Project from "./components/Project";
import SettingsButton from "./components/SettingsButton";
import SettingsPanel from "./components/SettingsPanel";

export default function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
<SettingsButton onClick={() => setSettingsOpen(true)} />
<SettingsPanel
  open={settingsOpen}
  onClose={() => setSettingsOpen(false)}
/>

      <Header />

      <main>
        <Section title="About">
          I’m <b>Keerthi Narayana Prasad</b>, a Senior Software Engineer specializing in
          frontend-heavy systems using <b>React</b> and <b>Vue</b>. I focus on building
          scalable UI architectures, improving performance, and mentoring engineers —
          with a clear goal of stepping into a <b>Tech Lead</b> role.
        </Section>

        <Section title="What I Bring as a Lead">
          <ul>
            <li>Ownership of complex, business-critical UI systems</li>
            <li>Clear architectural decisions with long-term thinking</li>
            <li>Strong code quality culture through reviews & mentorship</li>
            <li>Effective collaboration with backend, product, and design</li>
          </ul>
        </Section>

        <Section title="Key Projects">
          <Project
            title="Enterprise Workflow Platform"
            description="Led frontend architecture, improved performance, and reduced developer onboarding time."
          />
          <Project
            title="Contract & Document Preview System"
            description="Designed secure previews, optimized rendering, and improved UX for large documents."
          />
        </Section>

        <Section title="Career Direction">
          My goal is to move into a <b>Tech Lead</b> role where I can own systems,
          guide technical direction, mentor engineers, and align execution with
          business outcomes.
        </Section>

        <Section title="Contact">
          <p><b>Email:</b> keerthinarayanaprasad2009@gmail.com</p>
          <p><b>GitHub:</b> https://github.com/Keerthi2009</p>
          {/* <p><b>LinkedIn:</b> linkedin.com/in/keerthi</p> */}
        </Section>
      </main>

      <footer>© 2026 Keerthi Narayana Prasad</footer>
    </>
  );
}
