import React, { useState } from 'react';

function ThemeToggle() {
  const [lightMode, setLightMode] = useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode);
  }, [lightMode]);

  return (
    <div id="toggleTheme" onClick={() => setLightMode(l => !l)}>
      Toggle Theme
    </div>
  );
}

export default ThemeToggle;
