import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const NavbarContainer = styled(AppBar)`
  background-color: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled(Button)`
  margin: 0 8px;
  color: #f5f5f5;
  font-weight: 500;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #e94560;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const MobileNavItem = styled(ListItem)`
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <NavbarContainer 
      position="fixed" 
      elevation={scrolled ? 4 : 0}
      sx={{ 
        transition: 'all 0.3s ease',
        py: scrolled ? 0.5 : 1,
      }}
    >
      <Toolbar sx={{ maxWidth: '1200px', mx: 'auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ flexGrow: 1 }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            <span style={{ color: '#e94560' }}>ADI</span>THYA
          </Typography>
        </motion.div>
        
        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              style={{ display: 'inline-block' }}
            >
              <NavButton 
                onClick={() => scrollToSection(item)}
                sx={{ '&:hover': { color: '#e94560' } }}
              >
                {item}
              </NavButton>
            </motion.div>
          ))}
        </Box>
        
        {/* Mobile Navigation Icon */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      
      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: '#1a1a2e',
            color: '#f5f5f5'
          },
        }}
      >
        <Box sx={{ textAlign: 'right', p: 1 }}>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <MobileNavItem button onClick={() => scrollToSection(item)}>
                  <Typography variant="body1">{item}</Typography>
                </MobileNavItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </List>
      </Drawer>
    </NavbarContainer>
  );
};

export default Navbar;