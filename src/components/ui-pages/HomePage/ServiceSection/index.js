import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {
  SecondTitle,
  SmallTitle,
  ThirdTitle,
} from '@/components/ui-components/CustomTitle';
import { myThemeColor } from '@/constant/globals';
import { Paragraph } from '@/components/ui-components/CustomTypography';
import { CircleButton } from '@/components/ui-components/CustomButton';

const ServiceSection = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Box>
              <SecondTitle sx={{ mb: 2 }}>Services | Offer</SecondTitle>
              <Box sx={{ display: 'flex', alignItems: 'start' }}>
                <Box
                  sx={{
                    height: 2,
                    mt: 1.2,
                    background: myThemeColor.black,
                    width: 70,
                  }}
                />
                <Paragraph sx={{ pl: 1.3 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, cum vero sunt architecto aliquid, iste incidunt
                  minima eius illo iusto voluptates deserunt harum consequuntur
                  similique. Distinctio id atque magni quasi?
                </Paragraph>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 1,
                  borderTop: `2px solid ${myThemeColor.black}`,
                  pt: 3,
                  pb: 5,
                }}
              >
                <SmallTitle>01/</SmallTitle>
                <ThirdTitle sx={{ px: 2 }}>Website Design</ThirdTitle>
                <Box>
                  <CircleButton>
                    <ArrowOutwardIcon />
                  </CircleButton>
                  <SmallTitle sx={{ textAlign: 'center', mt: 1 }}>
                    Explore
                  </SmallTitle>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 1,
                  borderTop: `2px solid ${myThemeColor.black}`,
                  pt: 3,
                  pb: 5,
                }}
              >
                <SmallTitle>02/</SmallTitle>
                <ThirdTitle sx={{ px: 2 }}>Website Development</ThirdTitle>
                <Box>
                  <CircleButton>
                    <ArrowOutwardIcon />
                  </CircleButton>
                  <SmallTitle sx={{ textAlign: 'center', mt: 1 }}>
                    Explore
                  </SmallTitle>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 1,
                  borderTop: `2px solid ${myThemeColor.black}`,
                  pt: 3,
                }}
              >
                <SmallTitle>03/</SmallTitle>
                <ThirdTitle sx={{ px: 2 }}>Management Software</ThirdTitle>
                <Box>
                  <CircleButton>
                    <ArrowOutwardIcon />
                  </CircleButton>
                  <SmallTitle sx={{ textAlign: 'center', mt: 1 }}>
                    Explore
                  </SmallTitle>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
