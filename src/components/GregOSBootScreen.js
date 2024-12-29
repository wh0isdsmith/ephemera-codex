import React, { useState, useEffect } from 'react';

const GregOSBootScreen = (props) => {
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Define an array of boot messages (including potential errors)
  const bootSequence = [
    'Initializing GregOS v1.0.0...',
    'Loading kernel modules...',
    'Memory check: 4096MB OK',
    'ERROR: QuantumMind interface not detected.',
    'Attempting to establish connection...',
    'WARNING: System instability detected.',
    'Initializing core system processes...',
    'INT3RN4L_3RR0R: Failed to load emotional regulation module.',
    'WARNING: Parental Execution System (PES) is active.',
    'Searching for valid user profile...',
    'User profile "Greg" loaded.',
    'Launching user interface...',
    'Boot sequence complete.',
  ];

  useEffect(() => {
    const logMessage = (message, type = 'log') => {
      switch (type) {
        case 'warn':
          console.warn(message);
          break;
        case 'error':
          console.error(message);
          break;
        default:
          console.log(message);
      }
    };
    const timeoutId = setTimeout(() => {
      if (currentMessageIndex < bootSequence.length) {
        const currentMessage = bootSequence[currentMessageIndex];
        const messageType = currentMessage.startsWith('ERROR')
          ? 'error'
          : currentMessage.startsWith('WARNING')
          ? 'warn'
          : 'log';
        // Log to console based on message type
        logMessage(currentMessage, messageType);
        setMessages((prevMessages) => [...prevMessages, currentMessage]);
        setCurrentMessageIndex(currentMessageIndex + 1);
      } else {
        setLoading(false);
        // Notify parent component
        if (props.onBootComplete) {
          props.onBootComplete();
        }
      }
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timeoutId);
  }, [currentMessageIndex]);

  return (
    <div className="bg-black text-green-400 font-mono text-lg p-4 h-screen w-screen overflow-y-scroll">
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      {loading && <p>...</p>}
    </div>
  );
};

export default GregOSBootScreen;