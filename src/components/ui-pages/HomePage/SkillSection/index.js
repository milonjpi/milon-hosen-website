import {
  SecondTitle,
  SmallTitle,
  ThirdTitle,
} from '@/components/ui-components/CustomTitle';
import { Paragraph } from '@/components/ui-components/CustomTypography';
import { myThemeColor } from '@/constant/globals';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import skillList from './skillList';

const SkillSection = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: myThemeColor.bg }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 7 }}>
              <SecondTitle sx={{ mb: 2 }}>Skills &amp; Experience</SecondTitle>
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
            <Box>
              <ThirdTitle sx={{ fontSize: 18, mb: 5 }}>Experience</ThirdTitle>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 1,
                  borderTop: `2px solid ${myThemeColor.black}`,
                  pt: 2,
                  pb: 3,
                }}
              >
                <SmallTitle
                  sx={{
                    backgroundColor: '#fff',
                    px: 2,
                    py: 1.5,
                    borderRadius: 5,
                    border: `1px solid ${myThemeColor.black}`,
                  }}
                >
                  2021 - Present
                </SmallTitle>
                <ThirdTitle sx={{ px: 2 }}>
                  Senior Officer &#40;Programmer&#41;
                </ThirdTitle>
                <SmallTitle>GMS</SmallTitle>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 1,
                  borderTop: `2px solid ${myThemeColor.black}`,
                  pt: 2,
                }}
              >
                <SmallTitle
                  sx={{
                    backgroundColor: '#fff',
                    px: 2,
                    py: 1.5,
                    borderRadius: 5,
                    border: `1px solid ${myThemeColor.black}`,
                  }}
                >
                  2016 - 2021
                </SmallTitle>
                <ThirdTitle sx={{ px: 2 }}>IT Officer</ThirdTitle>
                <SmallTitle>GMS</SmallTitle>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <ThirdTitle sx={{ mb: 2 }}>Skills</ThirdTitle>
              <Grid container spacing={0.5}>
                {skillList?.map((el) => (
                  <Grid item key={el.id}>
                    <SkillItem data={el} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillSection;

const SkillItem = ({ data }) => {
  return (
    <Box
      sx={{
        width: { xs: 100, md: 90, lg: 100 },
        height: { xs: 100, md: 90, lg: 100 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: myThemeColor.bgLight,
        mr: 0.5,
        mb: 0.5,
      }}
    >
      <Image src={data.icon} width={30} height={30} alt={`${data?.title}`} />
      <SmallTitle sx={{ mt: 1 }}>{data?.title}</SmallTitle>
    </Box>
  );
};
