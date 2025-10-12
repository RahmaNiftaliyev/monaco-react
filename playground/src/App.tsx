import React, { useState, Activity } from 'react';

import Editor from '../../dist';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible((v) => !v)}>{isVisible ? 'Hide' : 'Show'} Editor</button>
      <Activity mode={isVisible ? 'visible' : 'hidden'}>
        <Editor height="100vh" defaultLanguage="javascript" defaultValue="// some comment" />
      </Activity>
    </div>
  );
}

export default App;
