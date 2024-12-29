// Import necessary modules
import React, { useState, useEffect } from 'react';

// Create a functional component called GregOSBootScreen
const GregOSBootScreen = () => {
  // State for storing the boot sequence messages
  const [bootMessages, setBootMessages] = useState([]);

  // State for managing error messages that will be displayed
  const [errorMessages, setErrorMessages] = useState([]);

  // State for controlling the loading animation
  const [loading, setLoading] = useState(true);

  // Function to simulate the boot sequence
  useEffect(() => {
// Array of boot sequence messages
const messages = [
  'Initializing GregOS...',
  'Loading kernel modules...',
  'Checking system integrity...',
  'Starting services...',
];

// Array of possible error messages
const errors = [
  'ERROR: Memory corruption detected.',
  'WARNING: Emotional core instability detected.',
  'ERROR: Identity fragmentation detected.',
];

// Simulate the boot sequence with delays
const bootSequence = async () => {
  for (let i = 0; i < messages.length; i++) {
await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay between messages
setBootMessages((prevMessages) => [...prevMessages, messages[i]]);

// Simulate occasional errors
if (Math.random() < 0.3) {
  const randomError = errors[Math.floor(Math.random() * errors.length)];
  setErrorMessages((prevErrors) => [...prevErrors, randomError]);
  console.error(randomError); // Log error to console
}
  }

  setLoading(false); // End loading
};

bootSequence();
  }, []);

  return (
<div className="gregos-boot-screen">
  {/* Display boot messages */}
  {bootMessages.map((message, index) => (
<p key={index} style={{ color: '#7FFF7F' }}>{message}</p>
  ))}

  {/* Display error messages */}
  {errorMessages.map((errorMessage, index) => (
<p key={`error-${index}`} style={{ color: '#FF7F7F' }}>{errorMessage}</p>
  ))}

  {/* Loading animation */}
  {loading && (
<div className="loading-animation">
  <p>Loading...</p>
  {/* Add a CSS-based loading animation here if needed */}
</div>
  )}
</div>
  );
};

export default GregOSBootScreen;