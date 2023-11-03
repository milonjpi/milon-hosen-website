import { SecondTitle } from '@/components/ui-components/CustomTitle';
import { myThemeColor } from '@/constant/globals';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import projectList from './projectList';
import { ButtonRed } from '@/components/ui-components/CustomButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ProjectSection = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: myThemeColor.bgLight }}>
      <Container maxWidth="lg">
        <SecondTitle sx={{ mb: 5 }}>Latest Work</SecondTitle>
        <Grid container spacing={2}>
          {projectList?.map((el) => (
            <Grid item key={el.id} xs={12} sm={6} md={4}>
              <ProjectItem data={el} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', py: 5 }}>
          <ButtonRed size="large" startIcon={<ArrowOutwardIcon />}>
            View All Work
          </ButtonRed>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectSection;

const ProjectItem = ({ data }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 300, sm: 200, lg: 250 },
        background: '#fff',
        width: '100%',
      }}
    >
      <Image
        src={data?.photo}
        alt="project-photo"
        priority
        fill
        sizes="(min-width: 100%) 50vw, 100vw"
        style={{
          objectFit: 'cover',
          padding: '15px 10px',
        }}
      />
    </Box>
  );
};
