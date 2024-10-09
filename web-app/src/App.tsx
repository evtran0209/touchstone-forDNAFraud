import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './components/Dashboard';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Authenticator>
        {({ signOut, user }) => (
          <Dashboard user={user} signOut={signOut} />
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;