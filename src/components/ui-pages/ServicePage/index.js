'use client';
import { MainTitle } from '@/components/ui-components/CustomTitle';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ServicePage = () => {
  return (
    <Box
      sx={{
        pt: { xs: '100px', sm: '110px', md: '112px' },
      }}
    >
      <Container sx={{ py: 5 }} maxWidth="lg">
        <MainTitle
          sx={{
            fontFamily: 'Cinzel',
            fontWeight: 600,
            textAlign: 'center',
            mb: 5,
          }}
        >
          Services / Offer
        </MainTitle>
      </Container>
    </Box>
  );
};

export default ServicePage;
