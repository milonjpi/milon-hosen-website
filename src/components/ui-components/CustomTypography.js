import { myThemeColor } from '@/constant/globals';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

export const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: myThemeColor.paragraph,
  lineHeight: 1.5,
}));
