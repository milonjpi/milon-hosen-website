import { footerData, myThemeColor } from '@/constant/globals';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FooterInfo from './FooterInfo';
import ImportantLink from './ImportantLink';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <Box sx={{ pt: 10, backgroundColor: myThemeColor.black }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <FooterInfo data={footerData?.info} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ImportantLink data={footerData?.links} />
            </Grid>
            <Grid item xs={12} md={4}>
              <SocialLink data={footerData?.social} />
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ borderColor: '#fff3' }} />
        <Typography
          sx={{
            lineHeight: 1,
            py: 3,
            color: '#ffffff8f',
            fontSize: 12,
            textAlign: 'center',
          }}
        >
          &copy; {new Date().getFullYear()} All Right Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
