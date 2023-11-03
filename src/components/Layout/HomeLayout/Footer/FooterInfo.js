import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MainTitle, ThirdTitle } from '@/components/ui-components/CustomTitle';

const FooterInfo = ({ data }) => {
  return (
    <Box>
      <MainTitle sx={{ color: '#ffffff8f' }}>Milon Hosen</MainTitle>
      <ThirdTitle sx={{ color: '#ffffff8f' }}>Full-Stack Developer</ThirdTitle>
      <List sx={{ mt: 2 }}>
        {data?.map((item) => (
          <ListItem key={item.id} disableGutters>
            <ListItemIcon sx={{ minWidth: '30px' }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.info}
              primaryTypographyProps={{
                fontSize: 13,
                color: '#aaa7a7',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FooterInfo;
