import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Project from "./components/Project";
import SettingsButton from "./components/SettingsButton";
import SettingsPanel from "./components/SettingsPanel";
import GitHubProjects from "./components/GitHubProjects";

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
          I’m <b>Keerthi Narayana Prasad N</b>, a Senior Full-Stack Engineer with
          <b> 4+ years of experience</b> building scalable web applications.
          I specialize in frontend-heavy systems using <b>React</b> and <b>Vue</b>,
          with strong backend experience in <b>Node.js</b> and <b>Django</b>.
          <br /><br />
          I’ve worked primarily in fast-paced startup environments, owning
          features end-to-end, mentoring peers, and consistently delivering
          business-critical functionality. I’m now targeting a
          <b> Tech Lead</b> role.
        </Section>

        <Section title="What I Bring as a Lead">
          <ul>
            <li>End-to-end ownership of full-stack features</li>
            <li>Strong architectural thinking for frontend systems</li>
            <li>Clear task breakdowns, estimations, and delivery planning</li>
            <li>Code quality enforcement through reviews & mentoring</li>
            <li>Effective collaboration with product, design, and backend teams</li>
          </ul>
        </Section>

        <Section title="Professional Experience">
          <Project
            title="Senior Software Development Engineer — Indarka Energy"
            description="Owned end-to-end development of CRM and solar design platforms. Built ES and D2C portals from a shared codebase with frequent releases. Led task estimations, PR reviews, dashboards, service orders, contract management, document workflows, and proposal flows. Recognized with ‘Above & Beyond’ awards twice for ownership and delivery."
          />
          <Project
            title="Software Engineering Intern — Oncierre Systems"
            description="Built dashboard-centric features using React, Node.js, and MS SQL Server. Quickly learned D3.js to deliver interactive data visualizations and consistently delivered tasks on time."
          />
        </Section>

        {/* 🔥 NEW SECTION */}
        <GitHubProjects />

        <Section title="Technical Skills">
          <ul>
            <li><b>Frontend:</b> React.js, Vue.js, JavaScript (ES6+), HTML5, CSS3</li>
            <li><b>Backend:</b> Node.js, Django, Python</li>
            <li><b>Databases:</b> PostgreSQL, MS SQL Server</li>
            <li><b>UI & Charts:</b> MUI, Element UI, D3.js, Chart.js, DHX Gantt</li>
            <li><b>Workflow:</b> n8n</li>
          </ul>
        </Section>

        <Section title="Career Direction">
          My goal is to move into a <b>Tech Lead</b> role where I can
          own system architecture, guide technical decisions, mentor engineers,
          and align engineering execution with business outcomes.
        </Section>

        <Section title="Contact">
          <p><b>Email:</b> keerthinarayanaprasad2009@gmail.com</p>
          <p><b>GitHub:</b> https://github.com/Keerthi2009</p>
          <p><b>Location:</b> Bengaluru, Karnataka</p>
        </Section>
      </main>

      <footer>© 2026 Keerthi Narayana Prasad N</footer>
    </>
  );
}
