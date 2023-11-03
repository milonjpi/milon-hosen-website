import { myThemeColor } from '@/constant/globals';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

export const MainTitle = styled(Typography)(({ theme, sx = {} }) => ({
  lineHeight: 1.1,
  fontWeight: 700,
  fontSize: 35,
  ...sx,
}));

export const SecondTitle = styled(Typography)(({ theme, sx = {} }) => ({
  lineHeight: 1.1,
  fontWeight: 700,
  fontSize: 22,
  color: myThemeColor.black,
  ...sx,
}));

export const ThirdTitle = styled(Typography)(({ theme, sx = {} }) => ({
  lineHeight: 1.1,
  fontWeight: 700,
  fontSize: 16,
  color: myThemeColor.black,
  ...sx,
}));

export const SmallTitle = styled(Typography)(({ theme, sx = {} }) => ({
  lineHeight: 1.1,
  fontWeight: 700,
  fontSize: 12,
  color: myThemeColor.black,
  ...sx,
}));

export const SubTitle = styled(Typography)(({ theme, sx = {} }) => ({
  lineHeight: 1.7,
  fontSize: 10,
  color: myThemeColor.paragraph,
  ...sx,
}));
