import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';
import { useEditor } from '../../context/EditorContext';

const WELCOME_MESSAGE = [
  "Microsoft Windows [Version 10.0.19045.3693]",
  "(c) Microsoft Corporation. All rights reserved.",
  "",
  "C:\\Users\\AkshaySaini\\Portfolio> npm start",
  "",
  "> namaste-akshay@1.0.0 start",
  "> react-scripts start",
  "",
  "Starting the development server...",
  "",
  "Compiled successfully!",
  "You can now view namaste-akshay in the browser.",
  "",
  "  Local:            http://localhost:3000",
  "  On Your Network:  http://192.168.1.5:3000",
  "",
  "Note that the development build is not optimized.",
  "To create a production build, use npm run build.",
  "",
];

export const Terminal: React.FC = () => {
  const { terminalVisible, toggleTerminal, terminalHeight } = useEditor();
  const [history, setHistory] = useState<string[]>(WELCOME_MESSAGE);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalVisible && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, terminalVisible]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: string[] = [];

    switch (trimmed) {
      case 'help':
        response = [
          "Available commands:",
          "  help     - Show this help message",
          "  clear    - Clear terminal history",
          "  whoami   - Display current user",
          "  about    - Display short bio",
          "  contact  - Show contact info"
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'whoami':
        response = ["Akshay Saini - Engineer, Teacher, YouTuber"];
        break;
      case 'about':
        response = ["Passionate about teaching JavaScript and React to the world. Creator of Namaste JavaScript."];
        break;
      case 'contact':
        response = ["Email: akshay@namaste.dev", "Twitter: @akshaymarch7"];
        break;
      case '':
        break;
      default:
        response = [`'${trimmed}' is not recognized as an internal or external command.`];
    }
    
    setHistory(prev => [...prev, `C:\\Users\\AkshaySaini\\Portfolio> ${cmd}`, ...response, ""]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  if (!terminalVisible) return null;

  return (
    <div 
        className="border-t border-[#3e3e3e] bg-vscode-panel flex flex-col shrink-0"
        style={{ height: terminalHeight }}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] text-xs uppercase tracking-wide border-b border-[#3e3e3e]">
        <div className="flex space-x-6">
            <span className="cursor-pointer border-b border-white pb-1">Terminal</span>
            <span className="cursor-pointer text-gray-500 hover:text-gray-300">Output</span>
            <span className="cursor-pointer text-gray-500 hover:text-gray-300">Debug Console</span>
            <span className="cursor-pointer text-gray-500 hover:text-gray-300">Problems</span>
        </div>
        <div className="flex items-center space-x-2">
            <ChevronUp size={14} className="cursor-pointer hover:text-white text-gray-400" />
            <X size={14} className="cursor-pointer hover:text-white text-gray-400" onClick={toggleTerminal} />
        </div>
      </div>
      <div className="flex-1 p-2 font-mono text-sm overflow-y-auto overflow-x-hidden">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap leading-tight text-gray-300">{line}</div>
        ))}
        <div className="flex items-center">
            <span className="text-gray-300 mr-2">C:\Users\AkshaySaini\Portfolio{'>'}</span>
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="bg-transparent outline-none flex-1 text-gray-300"
                autoFocus
            />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
