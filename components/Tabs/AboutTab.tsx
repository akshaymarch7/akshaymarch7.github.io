import React from 'react';

export const AboutTab: React.FC = () => {
  return (
    <div className="p-8 h-full overflow-y-auto font-sans max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-[#333] text-white">README.md</h1>
      
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">## About Me</h2>
          <p className="leading-7">
            Hi, I'm Akshay Saini. I am a software engineer and educator based in India. 
            I have a deep passion for web technologies, specifically <span className="bg-[#333] px-1 rounded text-vscode-orange">JavaScript</span>. 
            I've worked with companies like Uber and PayTM, building scalable frontend architectures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">## What I Do</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
             <li>🚀 Create educational content on YouTube (Namaste JavaScript)</li>
             <li>💻 Speak at tech conferences</li>
             <li>👨‍💻 Mentor aspiring developers</li>
             <li>🌐 Build high-performance web applications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">## Tech Stack</h2>
          <div className="font-mono text-sm bg-[#252526] p-4 rounded-md border border-[#333]">
            <div><span className="text-vscode-function">Frontend</span>: [React, Next.js, Tailwind, Redux]</div>
            <div><span className="text-vscode-function">Backend</span>: [Node.js, Express, System Design]</div>
            <div><span className="text-vscode-function">Tools</span>: [Git, Webpack, VS Code]</div>
          </div>
        </section>
        
        <section>
           <h2 className="text-xl font-bold text-vscode-keyword mb-2">## Philosophy</h2>
           <blockquote className="border-l-4 border-vscode-accent pl-4 italic text-gray-400">
              "Consistency is the key. Keep coding, keep learning."
           </blockquote>
        </section>
      </div>
    </div>
  );
};
