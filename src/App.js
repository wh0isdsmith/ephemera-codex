import React, { useState } from 'react';
import GregOSBootScreen from './components/GregOSBootScreen';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
// ... other imports

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  return (
    <div>
      {!bootComplete && (
        <GregOSBootScreen onBootComplete={handleBootComplete} />
      )}
      {bootComplete && (
        <>
          <Navigation />
          <Dashboard />
        </>
      )}
      {/* Rest of your application (e.g., Dashboard) will likely be rendered here conditionally based on the boot screen's state */}
    </div>
  );
}

export default App;