import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

interface PackageInfo {
  trackingNumber: string;
  status: string;
  location: string;
}

const API_ENDPOINT = 'YOUR_API_GATEWAY_ENDPOINT'; // Replace with your actual API Gateway endpoint

const PackageTracker: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [packageInfo, setPackageInfo] = useState<PackageInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(API_ENDPOINT, { trackingNumber });
      setPackageInfo(response.data);
    } catch (err) {
      setError('Failed to retrieve package information. Please try again.');
      console.error('Error tracking package:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Package Tracker
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          disabled={loading}
        />
        <Button variant="contained" onClick={handleTrack} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Track'}
        </Button>
      </Box>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      {packageInfo && (
        <Card>
          <CardContent>
            <Typography variant="h6">Tracking Number: {packageInfo.trackingNumber}</Typography>
            <Typography>Status: {packageInfo.status}</Typography>
            <Typography>Location: {packageInfo.location}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default PackageTracker;