import React from 'react';
import { Box, Typography, Toolbar, Container, Card, CardContent, useMediaQuery, CssBaseline, GlobalStyles } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img7 from '../../assets/img7.svg'
import styled from '@emotion/styled';
const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
    
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  color: '#060F22',
  // padding: theme.spacing(3),
}));
const Card6 = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: { backgroundColor: '#060F22', margin: 0, padding: 0, color: '#ffffff' },
        html: { backgroundColor: '#060F22' },
      }}
    />
    <StyledContainer>
      <Card sx={{ mt: 5, backgroundColor: '#060F22' }}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
            sx={{
              flexDirection: isMobile ? 'column' : 'row',
            }}
          >
            <img
              src={img7} 
              alt="Team discussion"
              style={{
                width: isMobile ? '100%' : '100%',
                borderRadius: '8px',
                borderTopLeftRadius:'18px',
                borderTopRightRadius:'18px'
              }}
            />
          </Box>
          <Box textAlign="left" sx={{padding:'20px'}}>
            <Typography variant="overline" display="block" gutterBottom sx={{color:'#2CB9FF',fontFamily:'lato',fontWeight:'600',fontSize:'18px',lineHeight:'22px'}}>
              Customer stories
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: isMobile ? '1.5rem' : '2.125rem',color:'#ffff',fontFamily:'lato',fontWeight:'700',lineHeight:'52px' }}>
              Adobe Experience Cloud migration: Web development and A/B testing.
            </Typography>
            <Typography variant="body1" paragraph  sx={{color:'#ffff',fontFamily:'lato',fontWeight:'400',lineHeight:'30px' }}>
              ZeddLabz experts helped the Microsoft 365 team migrate to Adobe Experience Cloud. Find out how we helped deliver tailored functionality, speedier modifications, and first-class customer experiences.
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box
        mt={5}
        p={isMobile ? 2 : 3}
        bgcolor="#ffff"
        textAlign="center"
        borderRadius="8px"
        color="#ffffff"
      >
        <Typography variant="h5" gutterBottom sx={{ fontSize: isMobile ? '1.25rem' : '1.5rem',color:'black' }}>
          We believe in defining the future.
        </Typography>
        <Typography variant="body1" sx={{color:'black'}}>
          With this insurgent mindset, we help companies at every step of their digital transformation journeys, from building and scaling cutting-edge technology solutions to transforming legacy IT infrastructure into digital platforms.
        </Typography>
      </Box>
    </StyledContainer>
  </ThemeProvider>

  )
}

export default Card6