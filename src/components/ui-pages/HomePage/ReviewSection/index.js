import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {
  SecondTitle,
  SmallTitle,
  SubTitle,
  ThirdTitle,
} from '@/components/ui-components/CustomTitle';
import { Paragraph } from '@/components/ui-components/CustomTypography';
import reviewList from './reviewList';

const ReviewSection = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <SecondTitle sx={{ mb: 5 }}>
          Client&apos;s Good <br />
          Reviews
        </SecondTitle>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          style={{ height: '100%', paddingBottom: 50 }}
        >
          {reviewList?.map((el) => (
            <SwiperSlide key={el.id}>
              <ReviewItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default ReviewSection;

const ReviewItem = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', mb: 3 }}>
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            backgroundColor: 'gray',
            mr: 2,
          }}
        ></Box>
        <Box sx={{ pt: 1 }}>
          <ThirdTitle sx={{ fontSize: 20 }}>Mark Leo</ThirdTitle>
          <SubTitle>CEO Apple</SubTitle>
        </Box>
      </Box>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, iusto
        nihil reiciendis accusantium ducimus doloremque aperiam magnam molestiae
        dignissimos architecto.
      </Paragraph>
    </Box>
  );
};
