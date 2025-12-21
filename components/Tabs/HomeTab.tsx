import React from 'react';
import { useEditor } from '../../context/EditorContext';

export const HomeTab: React.FC = () => {
  const { openFile } = useEditor();

  return (
    <div className="p-8 h-full overflow-y-auto bg-vscode-bg text-vscode-text font-sans selection:bg-vscode-selection">
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-5xl font-bold mb-6 text-vscode-text tracking-tight">
          Hello, I'm <span className="text-vscode-accent">Akshay Saini</span>
        </h1>

        <div className="font-mono text-sm mb-8 bg-vscode-sidebar p-4 border border-vscode-activity rounded-md inline-block">
          <span className="text-vscode-keyword">const</span> <span className="text-vscode-function">developer</span> = {`{`}
          <div className="pl-4">
            name: <span className="text-vscode-string">'Akshay Saini'</span>,<br />
            role: <span className="text-vscode-string">'Educator & Engineer'</span>,<br />
            mission: <span className="text-vscode-string">'Namaste JavaScript'</span>
          </div>
          {`};`}
        </div>

        <p className="text-lg leading-relaxed mb-6">
          I teach JavaScript, React, and System Design to hundreds of thousands of developers worldwide.
          Creator of <strong className="text-vscode-text font-bold">Namaste JavaScript</strong> and formerly at Uber & PayTM.
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => openFile('projects')}
            className="px-6 py-2 bg-vscode-accent hover:bg-blue-600 text-white font-medium rounded-sm transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => openFile('contact')}
            className="px-6 py-2 bg-[#3c3c3c] hover:bg-[#4c4c4c] text-white font-medium rounded-sm transition-colors"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-vscode-activity">
          <h3 className="text-sm uppercase tracking-wider text-vscode-text opacity-70 mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono text-vscode-keyword cursor-pointer">
            <span onClick={() => openFile('about')} className="hover:underline">About.md</span>
            <span onClick={() => openFile('projects')} className="hover:underline">Projects.json</span>
            <span onClick={() => openFile('videos')} className="hover:underline">Videos.tsx</span>
            <span onClick={() => openFile('contact')} className="hover:underline">Contact.css</span>
          </div>
        </div>
      </div>
    </div>
  );
};
