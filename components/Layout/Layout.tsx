import React, { useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { ActivityBar } from './ActivityBar';
import { Sidebar } from './Sidebar';
import { EditorArea } from './EditorArea';
import { StatusBar } from './StatusBar';
import { Terminal } from './Terminal';
import { useEditor } from '../../context/EditorContext';
import { Seo } from '../SEO/Seo';

export const Layout: React.FC = () => {
  const {
    setSidebarWidth, sidebarVisible, setSidebarVisible,
    terminalHeight, setTerminalHeight, terminalVisible,
    toggleTerminal
  } = useEditor();

  // Keyboard Shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if Meta (Mac) or Ctrl (Windows) is pressed
      const isMeta = e.metaKey || e.ctrlKey;

      if (isMeta && e.key === 'k') {
        e.preventDefault();
        alert("🔍 Searching for inspiration... (This is a fake search bar!)");
      }

      if (isMeta && e.key === 'p') {
        e.preventDefault();
        alert("📂 Opening all the files... (Just kidding, use the explorer!)");
      }

      if (isMeta && e.key === 's') {
        e.preventDefault();
        alert("❤️ Saved to local storage (in your heart)!");
      }

      // Alt + T to toggle terminal
      if (e.altKey && e.key === 't') {
        e.preventDefault();
        toggleTerminal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTerminal]);

  const startResizingSidebar = useCallback(() => {
    const onMouseMove = (e: MouseEvent) => {
      // 48 is the ActivityBar width (w-12)
      let newWidth = e.clientX - 48;
      // Constraints
      if (newWidth < 150) newWidth = 150;
      if (newWidth > 600) newWidth = 600;
      setSidebarWidth(newWidth);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'default';
      // Remove any text selection that might have happened
      document.body.style.userSelect = 'auto';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [setSidebarWidth]);

  const startResizingTerminal = useCallback((mouseDownEvent: React.MouseEvent) => {
    const startY = mouseDownEvent.clientY;
    const startHeight = terminalHeight;

    const onMouseMove = (e: MouseEvent) => {
      const delta = startY - e.clientY;
      let newHeight = startHeight + delta;

      // Constraints
      if (newHeight < 100) newHeight = 100;
      if (newHeight > window.innerHeight - 200) newHeight = window.innerHeight - 200;

      setTerminalHeight(newHeight);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';
  }, [terminalHeight, setTerminalHeight]);

  return (
    <div className="flex flex-col h-[100dvh] w-screen bg-vscode-bg text-vscode-text font-sans">
      <Seo
        title="Akshay Saini | Portfolio"
        description="Portfolio of Akshay Saini, Software Engineer and Educator."
        keywords={['Akshay Saini', 'Portfolio', 'Software Engineer', 'Web Development', 'React']}
      />
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar />

        {/* Sidebar - Overlay on Mobile, Relative on Desktop */}
        <div className={`
            absolute md:relative z-20 h-full flex transition-all duration-300 ease-in-out
            ${sidebarVisible ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:hidden'}
            ${!sidebarVisible && 'md:!hidden'}
        `}>
          <Sidebar />
        </div>

        {/* Backdrop for Mobile Sidebar */}
        {sidebarVisible && (
          <div
            className="fixed inset-0 bg-black/50 z-10 md:hidden"
            onClick={() => setSidebarVisible(false)}
          />
        )}

        {/* Sidebar Resizer */}
        {sidebarVisible && (
          <div
            className="w-1 bg-transparent hover:bg-vscode-accent cursor-col-resize hover:delay-100 active:bg-vscode-accent z-10"
            onMouseDown={startResizingSidebar}
          />
        )}

        <div className="flex-1 flex flex-col min-w-0 bg-vscode-bg">
          <EditorArea />

          {/* Terminal Resizer */}
          {terminalVisible && (
            <div
              className="h-1 bg-transparent hover:bg-vscode-accent cursor-row-resize hover:delay-100 active:bg-vscode-accent z-10"
              onMouseDown={startResizingTerminal}
            />
          )}

          <Terminal />
        </div>
      </div>
      <StatusBar />
    </div>
  );
};
