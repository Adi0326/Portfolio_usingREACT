import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ArrowDownward } from '@mui/icons-material';

const HeroContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(15, 52, 96, 0.3), transparent 50%),
                radial-gradient(circle at bottom left, rgba(233, 69, 96, 0.2), transparent 50%);
    z-index: -1;
  }
`;

const AnimatedText = styled(motion.span)`
  display: inline-block;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, #e94560, #0f3460);
  filter: blur(15px);
  opacity: 0.2;
  z-index: -1;
`;

const Home = () => {
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

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const title = "B R Adithya";
  const subtitle = "Web Developer & CS Student";

  return (
    <HeroContainer id="home">
      {/* Animated background shapes */}
      <FloatingShape
        initial={{ x: '10%', y: '10%' }}
        animate={{ 
          x: ['10%', '15%', '10%'],
          y: ['10%', '15%', '10%']
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ width: 300, height: 300, top: '20%', right: '10%' }}
      />
      <FloatingShape
        initial={{ x: '-5%', y: '-5%' }}
        animate={{ 
          x: ['-5%', '-10%', '-5%'],
          y: ['-5%', '-10%', '-5%']
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ width: 200, height: 200, bottom: '10%', left: '5%' }}
      />

      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: { xs: 'center', md: 'center' },
          justifyContent: 'space-between',
          gap: 4
        }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: { xs: 'center', md: 'flex-start' }, 
              gap: 3,
              flex: '1'
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography 
                variant="subtitle1" 
                sx={{ color: '#e94560', fontWeight: 500 }}
              >
                Hello, I'm
              </Typography>
            </motion.div>

            <motion.div variants={textVariants} style={{ overflow: 'hidden' }}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 'bold', 
                  fontSize: { xs: '2.5rem', md: '4rem' }, 
                  mb: 2,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                {title.split('').map((char, index) => (
                  <AnimatedText key={index} variants={letterVariants}>
                    {char === ' ' ? '\u00A0' : char}
                  </AnimatedText>
                ))}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  color: 'text.secondary', 
                  fontWeight: 300, 
                  fontSize: { xs: '1.5rem', md: '2rem' }, 
                  mb: 2,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                {subtitle}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary', 
                  maxWidth: '32rem', 
                  mb: 4,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                A passionate Computer Science student with expertise in web development, 
                AI, and problem-solving. I love building innovative solutions and 
                participating in hackathons.
              </Typography>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
            >
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  backgroundColor: '#e94560',
                  '&:hover': { backgroundColor: '#d13652' }
                }}
              >
                View My Work
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: '#e94560',
                  color: '#f5f5f5',
                  '&:hover': { borderColor: '#d13652' }
                }}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            sx={{ 
              flex: '0 0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: { md: 'absolute', xs: 'relative' },
              right: { md: '10%', xs: 'auto' },
              top: { md: '20%', xs: 'auto' },
              marginTop: { xs: '-100px', md: '0' }
            }}
          >
            <Box
              component="div"
              sx={{
                width: { xs: '280px', md: '380px' },
                height: { xs: '280px', md: '380px' },
                borderRadius: '50%',
                overflow: 'hidden',
                border: '6px solid rgba(233, 69, 96, 0.5)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                position: 'relative'
              }}
            >
              <Box
                component="img"
                src="/profile_pic/WhatsApp Image 2025-05-24 at 15.28.36.jpeg"
                alt="B R Adithya"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>

      <motion.div 
        sx={{ position: 'absolute', bottom: '40px', left: '70%', transform: 'translateX(-50%)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDownward sx={{ color: '#e94560' }} />
        </motion.div>
      </motion.div>
    </HeroContainer>
  );
};

export default Home;