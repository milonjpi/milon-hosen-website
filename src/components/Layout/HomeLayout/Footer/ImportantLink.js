import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import { SmallTitle, ThirdTitle } from '@/components/ui-components/CustomTitle';
import { myThemeColor } from '@/constant/globals';

const ImportantLink = ({ data }) => {
  return (
    <Box>
      <ThirdTitle sx={{ mb: 1.5, color: '#ffffff8f' }}>
        Important Link
      </ThirdTitle>
      <List>
        {data?.map((el) => (
          <ListItem key={el.id} disableGutters>
            <Link href={el.path} style={{ textDecoration: 'none' }}>
              <SmallTitle
                sx={{
                  color: '#ffffff8f',
                  transition: 'all ease 0.5s',
                  '&:hover': { color: myThemeColor.red },
                }}
              >
                {el.title}
              </SmallTitle>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ImportantLink;
