import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
// import the provider
import { UserProvider } from '../context/user'
// import the ThemeContext
import { ThemeContext, ThemeProvider } from '../context/theme'

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <main className={theme}>
        {/* wrap components that need access to context data in the provider */}
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
