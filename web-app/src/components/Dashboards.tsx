import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import PackageTracker from './PackageTracker';

interface DashboardProps {
  user: any;
  signOut?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, signOut }) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {user.username}!
        </Typography>
        <Typography variant="body1">
          This is your package tracking and fraud detection dashboard.
        </Typography>
        <Button variant="contained" color="primary" onClick={signOut} sx={{ mt: 2, mb: 4 }}>
          Sign Out
        </Button>
        <PackageTracker />
      </Box>
    </Container>
  );
};

export default Dashboard;