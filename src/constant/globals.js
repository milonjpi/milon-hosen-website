import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconBrandGithubFilled } from '@tabler/icons-react';

// footer data
export const footerData = {
  info: [
    {
      id: 1,
      icon: <EmailOutlinedIcon sx={{ color: '#ffffff8f', fontSize: 20 }} />,
      info: 'contact@milonhosen.com',
    },
    {
      id: 2,
      icon: (
        <AlternateEmailOutlinedIcon sx={{ color: '#ffffff8f', fontSize: 20 }} />
      ),
      info: 'milon.jjj@gmail.com',
    },
    {
      id: 3,
      icon: (
        <PhoneIphoneOutlinedIcon sx={{ color: '#ffffff8f', fontSize: 20 }} />
      ),
      info: '+8801943544584',
    },
  ],
  links: [
    {
      id: 1,
      title: 'Home',
      path: '/',
    },
    {
      id: 2,
      title: 'Services',
      path: '/services',
    },
    {
      id: 3,
      title: 'Projects',
      path: '/projects',
    },
    {
      id: 4,
      title: 'Blogs',
      path: '/blogs',
    },
    {
      id: 5,
      title: 'About Me',
      path: '/about',
    },

    {
      id: 6,
      title: 'Contact',
      path: '/contact',
    },
  ],
  social: [
    {
      id: 1,
      icon: <IconBrandGithubFilled style={{ color: '#aaa7a7' }} />,
      path: 'https://github.com/milonjpi',
    },
    {
      id: 2,
      icon: <LinkedInIcon fontSize="small" sx={{ color: '#aaa7a7' }} />,
      path: 'https://www.linkedin.com/in/milonjpi',
    },
    {
      id: 3,
      icon: <FacebookIcon fontSize="small" sx={{ color: '#aaa7a7' }} />,
      path: 'https://www.facebook.com/jjj.milon',
    },

    {
      id: 4,
      icon: <InstagramIcon fontSize="small" sx={{ color: '#aaa7a7' }} />,
      path: 'https://www.instagram.com/milon.jpi',
    },
  ],
};

export const myThemeColor = {
  red: '#ea3f3f',
  black: '#231520',
  yellow: '#ffd06e',
  bg: '#efdfd2',
  bgLight: '#f4eae1',
  paragraph: '#5d585f',
};
