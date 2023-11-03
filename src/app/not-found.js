'use client';

import { MainTitle } from '@/components/ui-components/CustomTitle';
import { Paragraph } from '@/components/ui-components/CustomTypography';
import { myThemeColor } from '@/constant/globals';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const NotFoundPage = () => {
  return (
    <Box sx={{ pt: { xs: '100px', sm: '110px', md: '112px' } }}>
      <Container>
        <Box sx={{ py: 20 }}>
          <MainTitle
            sx={{ textAlign: 'center', fontSize: 100, color: myThemeColor.red }}
          >
            404
          </MainTitle>
          <Paragraph sx={{ textAlign: 'center' }}>
            You didn&apos;t break the internet, but we can&apos;t find what you
            are looking for.
          </Paragraph>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
