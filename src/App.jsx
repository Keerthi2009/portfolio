import Header from "./components/Header";
import Section from "./components/Section";
import Project from "./components/Project";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />

      <Section title="About Me">
        Senior Software Engineer with X+ years of experience building scalable,
        maintainable systems. Focused on architecture, performance, and mentoring
        engineers. Targeting a Tech Lead role.
      </Section>

      <Section title="Technical Skills">
        <ul>
          <li><b>Frontend:</b> React, Vue, TypeScript</li>
          <li><b>Backend:</b> Node.js, REST APIs</li>
          <li><b>Databases:</b> PostgreSQL, MySQL</li>
          <li><b>System Design:</b> Scalable architecture, API design</li>
          <li><b>DevOps:</b> Git, CI/CD, Docker</li>
        </ul>
      </Section>

      <Section title="Leadership & Impact">
        <ul>
          <li>Led architecture discussions and code reviews</li>
          <li>Mentored junior & mid-level engineers</li>
          <li>Owned features end-to-end</li>
          <li>Reduced production incidents</li>
        </ul>
      </Section>

      <Section title="Key Projects">
        <Project
          title="Enterprise Workflow Management System"
          description="Owned frontend architecture and performance improvements."
        />
        <Project
          title="Contract & Document Preview Platform"
          description="Designed secure document previews and optimized rendering."
        />
      </Section>

      <Section title="Career Goal">
        Move into a Tech Lead role owning systems, mentoring teams,
        and aligning engineering with business goals.
      </Section>

      <Section title="Contact">
        <p>Email: your.email@example.com</p>
        <p>
          GitHub: <a href="https://github.com/yourname">github.com/yourname</a>
        </p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/yourname">
            linkedin.com/in/yourname
          </a>
        </p>
      </Section>

      <footer>© 2026 Your Name</footer>
    </>
  );
}
