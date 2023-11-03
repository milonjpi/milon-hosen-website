'use client';

import Box from '@mui/material/Box';

const ErrorPage = () => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        zIndex: 9999999,
        pointerEvents: 'none',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ fontSize: 100 }}>Woops!!!</h1>
      <h1>Something Went Wrong!!!</h1>
      <p>Please try again, It will be fine.</p>
    </Box>
  );
};

export default ErrorPage;
