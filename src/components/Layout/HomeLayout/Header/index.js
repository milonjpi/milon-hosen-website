import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { myThemeColor } from '@/constant/globals';

//assets
const brandImage = '/images/logo.png';

const BrandImage = styled.img`
  display: inline-block;
  width: 150px;
  cursor: pointer;
`;

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Projects', path: '/projects' },
  { title: 'Blogs', path: '/blogs' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const path = usePathname();
  const pathname = `/${path?.split('/')[1]}`;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({ threshold: 200 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        enableColorOnDark={true}
        color="common"
        elevation={!trigger ? 1 : 0}
        sx={{
          py: 3,
          transition: 'all ease 0.5s',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                lineHeight: 0,
                mr: '40px',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Link href="/">
                <BrandImage src={brandImage} alt="Milon" />
              </Link>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                // size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{
                      width: '90vw',
                      backgroundColor: page.path === pathname && '#f6f9ff',
                      borderBottom:
                        page.path === pathname &&
                        `1px solid ${myThemeColor.red}`,
                    }}
                  >
                    <Link
                      href={page.path}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <Typography
                        textAlign="center"
                        sx={{
                          textTransform: 'uppercase',
                          textDecoration: 'none',
                          fontSize: 12,
                          color: myThemeColor.black,
                          fontFamily: 'Open Sans',
                          letterSpacing: '0.2em',
                        }}
                      >
                        {page.title}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
              }}
            >
              <Link href="/">
                <BrandImage src={brandImage} alt="Milon" />
              </Link>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.title}
                  href={page.path}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: myThemeColor.black,
                      display: 'block',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      fontSize: 12,
                      fontFamily: 'Open Sans',
                      letterSpacing: '0.15em',
                      mr: 0.5,
                      backgroundColor: page.path === pathname && '#f6f9ff',
                      borderBottom:
                        page.path === pathname &&
                        `1px solid ${myThemeColor.red}`,
                    }}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Link href="https://www.linkedin.com/in/milonjpi" target="_blank">
                <LinkedInIcon
                  fontSize="small"
                  sx={{ mr: 1, color: myThemeColor.black }}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/milonjpi" target="_blank">
                <IconBrandGithubFilled
                  size={20}
                  style={{ color: myThemeColor.black }}
                />
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Header;
