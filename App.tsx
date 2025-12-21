import React from 'react';
import { EditorProvider } from './context/EditorContext';
import { Layout } from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <EditorProvider>
      <Layout />
    </EditorProvider>
  );
};

export default App;
