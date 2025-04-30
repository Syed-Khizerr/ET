// App.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>The current theme is: {theme}</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
