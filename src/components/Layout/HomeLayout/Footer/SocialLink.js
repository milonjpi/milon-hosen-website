import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { myThemeColor } from '@/constant/globals';
import Link from 'next/link';
import { ThirdTitle } from '@/components/ui-components/CustomTitle';

const SocialLink = ({ data }) => {
  return (
    <Box>
      <ThirdTitle sx={{ mb: 3.5, color: '#ffffff8f' }}>
        Social Links
      </ThirdTitle>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {data?.map((el) => (
          <Link key={el.id} href={`${el.path}`} target="_blank">
            <IconButton
              sx={{
                width: 33,
                height: 33,
                mr: 1,
                backgroundColor: '#2c2c2c',
                transition: 'all ease 0.5s',
                '&:hover': {
                  backgroundColor: myThemeColor.red,
                },
              }}
            >
              {el.icon}
            </IconButton>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default SocialLink;
