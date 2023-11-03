import { myThemeColor } from '@/constant/globals';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {
  SecondTitle,
  SmallTitle,
  ThirdTitle,
} from '@/components/ui-components/CustomTitle';
import Image from 'next/image';
import newsList from './newsList';

const NewsSection = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: myThemeColor.bg }}>
      <Container maxWidth="lg">
        <SecondTitle sx={{ mb: 5 }}>Latest News</SecondTitle>
        <Grid container spacing={4}>
          {newsList?.map((el) => (
            <Grid item key={el.id} xs={12} sm={6} md={4}>
              <NewsItem data={el} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsSection;

const NewsItem = ({ data }) => {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: { xs: 300, sm: 250, lg: 300 },
          background: '#fff',
          width: '100%',
        }}
      >
        <Image
          src={data?.photo}
          alt="news-photo"
          priority
          fill
          sizes="(min-width: 100%) 50vw, 100vw"
          style={{
            objectFit: 'cover',
            padding: '15px 10px',
          }}
        />
      </Box>
      <ThirdTitle sx={{ pt: 1.5 }}>{data?.title}</ThirdTitle>
    </Box>
  );
};
