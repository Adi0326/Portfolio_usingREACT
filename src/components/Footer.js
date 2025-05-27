import React from 'react';
import { Typography, Box, Container, Grid, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { GitHub, LinkedIn, Twitter, Instagram, KeyboardArrowUp } from '@mui/icons-material';

const FooterContainer = styled(Box)`
  background-color: #121212;
  padding: 60px 0 20px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(233, 69, 96, 0.5), transparent);
  }
`;

const SocialIconButton = styled(IconButton)`
  background-color: rgba(255, 255, 255, 0.05);
  margin-right: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e94560;
    transform: translateY(-5px);
  }
`;

const FooterLink = styled(Typography)`
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  cursor: pointer;
  margin-bottom: 8px;
  
  &:hover {
    color: #e94560;
    transform: translateX(5px);
  }
`;

const ScrollToTopButton = styled(IconButton)`
  position: absolute;
  right: 30px;
  top: -25px;
  background-color: #e94560;
  color: white;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #d13652;
    transform: translateY(-5px);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <GitHub />, label: 'GitHub', href: 'https://github.com/Adi0326' },
    { icon: <LinkedIn />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/b-r-adithya-4751bb25a' },
    { icon: <Twitter />, label: 'Twitter', href: '#' },
    { icon: <Instagram />, label: 'Instagram', href: '#' }
  ];

  return (
    <FooterContainer>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <ScrollToTopButton onClick={scrollToTop} aria-label="scroll to top">
          <KeyboardArrowUp />
        </ScrollToTopButton>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 2 }}>
                  <span className="text-highlight">ADI</span>THYA
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 300 }}>
                  A passionate Computer Science student with expertise in web development, 
                  AI, and problem-solving. Building innovative solutions for tomorrow's challenges.
                </Typography>
                <Box display="flex">
                  {socialLinks.map((link, index) => (
                    <SocialIconButton 
                      key={index} 
                      color="inherit" 
                      aria-label={link.label}
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </SocialIconButton>
                  ))}
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                  Quick Links
                </Typography>
                {navLinks.map((link, index) => (
                  <FooterLink 
                    key={index} 
                    variant="body2" 
                    component="a"
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href).scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </FooterLink>
                ))}
              </motion.div>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                  Contact Info
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 2, 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { color: '#e94560' }
                  }}
                  component="a"
                  href="mailto:pranamadithya15@gmail.com"
                >
                  <strong style={{ minWidth: '80px' }}>Email:</strong> pranamadithya15@gmail.com
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 2, 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { color: '#e94560' }
                  }}
                  component="a"
                  href="https://github.com/Adi0326"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong style={{ minWidth: '80px' }}>GitHub:</strong> github.com/Adi0326
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 2, 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { color: '#e94560' }
                  }}
                  component="a"
                  href="https://www.linkedin.com/in/b-r-adithya-4751bb25a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong style={{ minWidth: '80px' }}>LinkedIn:</strong> B R Adithya
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <strong style={{ minWidth: '80px' }}>Location:</strong> Bangalore, India
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
          
          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />
          
          <motion.div variants={itemVariants}>
            <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} B R Adithya. All rights reserved.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Designed & Built with ❤️
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;