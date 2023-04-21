import React from 'react';
import Typed from 'typed.js';

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a self-taught developer. ^1000', 'I am a Technical Writer.', 'I am a Mental Health Advocate.'],
      typeSpeed: 60,
      smartBackspace: true, // Default value  
      loop: 3,    
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
};

export default MyComponent;