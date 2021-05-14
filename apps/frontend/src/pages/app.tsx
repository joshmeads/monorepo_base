import React, { useState, useEffect } from 'react';

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <header>
      <h1>App</h1>
      <p>
        Page has been open for <code>{count}</code> seconds :D
      </p>
    </header>
  );
};
