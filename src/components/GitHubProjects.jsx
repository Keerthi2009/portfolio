import { useEffect, useState } from "react";
import Section from "./Section";

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Keerthi2009/repos?sort=created&direction=asc")
      .then(res => res.json())
      .then(data => {
        const filtered = data;
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Section title="GitHub Projects">
      {loading && <p>Loading projects…</p>}

      {!loading && repos.length === 0 && (
        <p>No public repositories to display.</p>
      )}
      <div class="github-container">
      {repos.map(repo => (
        <div key={repo.id} className="project ">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>
            ⭐ {repo.stargazers_count} &nbsp;|&nbsp;
            {repo.language || "Multiple"}
          </p>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            View on GitHub →
          </a>
        </div>
      ))}
      </div>
    </Section>
  );
}
