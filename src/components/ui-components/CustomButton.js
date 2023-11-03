import { myThemeColor } from '@/constant/globals';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export const ButtonRed = styled(Button)(({ theme, sx = {} }) => ({
  backgroundColor: myThemeColor.black,
  color: '#fff',
  fontSize: 13,
  minWidth: 100,
  textTransform: 'inherit',
  transition: 'all ease 0.5s',
  ...sx,
  '&:hover': {
    backgroundColor: myThemeColor.red,
  },
}));

export const LinkButton = styled(Button)(({ theme, sx = {} }) => ({
  fontSize: 11,
  fontWeight: 700,
  color: myThemeColor.black,
  ...sx,
}));

export const CircleButton = styled(IconButton)(({ theme, sx = {} }) => ({
  backgroundColor: myThemeColor.black,
  transition: 'all ease 0.5s',
  color: '#fff',
  ...sx,
  '&:hover': {
    backgroundColor: myThemeColor.red,
  },
}));
