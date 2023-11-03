import { myThemeColor } from '@/constant/globals';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import heroPhoto from './hero.png';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { ButtonRed, LinkButton } from '@/components/ui-components/CustomButton';
import { MainTitle, SmallTitle } from '@/components/ui-components/CustomTitle';
import Link from 'next/link';
import { Paragraph } from '@/components/ui-components/CustomTypography';

const HeroSection = () => {
  return (
    <Box
      sx={{
        pt: { xs: '100px', sm: '110px', md: '112px' },
        backgroundColor: myThemeColor.bg,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ pt: 5 }}>
          <MainTitle
            component="h2"
            sx={{
              textAlign: 'center',
              color: myThemeColor.red,
              fontSize: { xs: 30, sm: 40 },
            }}
          >
            Milon Hosen
          </MainTitle>
          <MainTitle
            component="h2"
            sx={{
              textAlign: 'center',
              color: myThemeColor.black,
              fontSize: { xs: 30, sm: 40 },
            }}
          >
            Full-Stack Developer
          </MainTitle>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="https://www.linkedin.com/in/milonjpi" target="_blank">
              <LinkButton
                size="small"
                endIcon={<ArrowOutwardIcon sx={{ color: myThemeColor.red }} />}
              >
                Linkedin
              </LinkButton>
            </Link>
            <Link href="https://github.com/milonjpi" target="_blank">
              <LinkButton
                size="small"
                endIcon={<ArrowOutwardIcon sx={{ color: myThemeColor.red }} />}
                sx={{ mx: 1.5 }}
              >
                GitHub
              </LinkButton>
            </Link>
            <Link href="https://www.facebook.com/jjj.milon" target="_blank">
              <LinkButton
                size="small"
                endIcon={<ArrowOutwardIcon sx={{ color: myThemeColor.red }} />}
              >
                Facebook
              </LinkButton>
            </Link>
          </Box>
        </Box>
        <Grid container spacing={3} sx={{ py: 5, alignItems: 'center' }}>
          <Grid item xs={12} md={3.5}>
            <Box>
              <Paragraph sx={{ pb: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, distinctio. Enim fugiat incidunt hic possimus autem
                ducimus sit officia beatae odit, perferendis tempore molestias
                fuga omnis tempora aliquam. Labore, dignissimos?
              </Paragraph>
              <ButtonRed
                size="large"
                sx={{ minWidth: 150 }}
                endIcon={<ArrowOutwardIcon />}
              >
                Hire Me
              </ButtonRed>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                margin: 'auto',
                height: { xs: 320, sm: 370 },
                width: { xs: 320, sm: 370 },
                border: '2px solid red',
                p: '8px',
                borderRadius: '50%',
              }}
            >
              <Box
                sx={{
                  height: { xs: 300, sm: 350 },
                  width: { xs: 300, sm: 350 },
                  margin: 'auto',
                  position: 'relative',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={heroPhoto}
                  alt="hero-photo"
                  priority
                  fill
                  sizes="(min-width: 100%) 50vw, 100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <MainTitle sx={{ textAlign: 'center', mb: 2 }}>15</MainTitle>
            <SmallTitle
              sx={{ textAlign: 'center', textTransform: 'uppercase', mb: 2 }}
            >
              Completed Projects
            </SmallTitle>
            <MainTitle sx={{ textAlign: 'center', mb: 2 }}>98%</MainTitle>
            <SmallTitle
              sx={{ textAlign: 'center', textTransform: 'uppercase', mb: 2 }}
            >
              Client Rating
            </SmallTitle>
            <MainTitle sx={{ textAlign: 'center', mb: 2 }}>2</MainTitle>
            <SmallTitle
              sx={{ textAlign: 'center', textTransform: 'uppercase', mb: 2 }}
            >
              Years Experience
            </SmallTitle>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
