import React from 'react';

const projects = [
  {
    id: 1,
    name: "Namaste JavaScript",
    description: "Deep dive into JS internals. 10M+ views.",
    link: "https://youtube.com/akshaysaini",
    tags: ["Education", "JavaScript", "Core"]
  },
  {
    id: 2,
    name: "Namaste React",
    description: "Zero to Hero React JS course.",
    link: "https://namastedev.com",
    tags: ["React", "Frontend", "System Design"]
  },
  {
    id: 3,
    name: "Frontend System Design",
    description: "Architecture patterns for large scale apps.",
    link: "https://namastedev.com",
    tags: ["Architecture", "Scalability"]
  }
];

export const ProjectsTab: React.FC = () => {
  return (
    <div className="p-4 h-full overflow-y-auto font-mono text-sm leading-6">
      <div>
        <span className="text-vscode-keyword">const</span> <span className="text-vscode-variable">projects</span> <span className="text-vscode-text">=</span> <span className="text-vscode-text">[</span>
      </div>

      {projects.map((project, index) => (
        <div key={project.id} className="pl-4 hover:bg-vscode-lineHighlight rounded group transition-colors">
          <span className="text-vscode-text">{`{`}</span>
          <div className="pl-4">
            <div>
              <span className="text-vscode-string">"id"</span>: <span className="text-vscode-number">{project.id}</span>,
            </div>
            <div>
              <span className="text-vscode-string">"name"</span>: <span className="text-vscode-string">"{project.name}"</span>,
            </div>
            <div>
              <span className="text-vscode-string">"description"</span>: <span className="text-vscode-string">"{project.description}"</span>,
            </div>
            <div>
              <span className="text-vscode-string">"link"</span>: <a href={project.link} target="_blank" rel="noreferrer" className="text-vscode-string underline decoration-vscode-string cursor-pointer">"{project.link}"</a>,
            </div>
            <div>
              <span className="text-vscode-string">"tags"</span>: <span className="text-vscode-text">[</span>
              {project.tags.map((tag, i) => (
                <span key={tag}>
                  <span className="text-vscode-string">"{tag}"</span>{i < project.tags.length - 1 && ","}
                </span>
              ))}
              <span className="text-vscode-text">]</span>
            </div>
          </div>
          <span className="text-vscode-text">{`}`}{index < projects.length - 1 && ","}</span>
        </div>
      ))}

      <div><span className="text-vscode-text">];</span></div>

      <div className="mt-8 text-vscode-comment">
        {`// TODO: Create more awesome things...`}
      </div>
    </div>
  );
};
