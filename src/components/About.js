import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { School, Code, EmojiEvents, Interests } from '@mui/icons-material';

const AboutContainer = styled(Box)`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom right, rgba(15, 52, 96, 0.2), transparent 40%);
    z-index: -1;
  }
`;

const InfoCard = styled(Paper)`
  background-color: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(233, 69, 96, 0.3);
  }
`;

const IconWrapper = styled(Box)`
  background: linear-gradient(45deg, #e94560, #0f3460);
  border-radius: 12px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const infoCards = [
    {
      title: "Education",
      icon: <School fontSize="large" />,
      description: "Computer Science student with a strong foundation in algorithms, data structures, and software development principles."
    },
    {
      title: "Coding Skills",
      icon: <Code fontSize="large" />,
      description: "Proficient in multiple programming languages including Python, Java, C, and JavaScript. Experienced in web development with React."
    },
    {
      title: "Achievements",
      icon: <EmojiEvents fontSize="large" />,
      description: "Participated in multiple hackathons and coding competitions. Recognized for innovative solutions and technical excellence."
    },
    {
      title: "Interests",
      icon: <Interests fontSize="large" />,
      description: "Passionate about AI, machine learning, and creating user-friendly web applications. Always exploring new technologies."
    }
  ];

  return (
    <AboutContainer id="about">
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} sx={{ mb: 8 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ textAlign: 'center', fontWeight: 'bold', mb: 3 }}
              gutterBottom
            >
              About Me
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: '800px', mx: 'auto' }}
            >
              Get to know more about me, my background, and what drives my passion for technology and development.
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <motion.div 
                variants={itemVariants}
                style={{ height: '100%' }}
              >
                <Box sx={{ position: 'relative', height: '100%' }}>
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(to bottom right, rgba(233, 69, 96, 0.2), rgba(15, 52, 96, 0.2))', 
                      opacity: 0.2, 
                      borderRadius: 2,
                      filter: 'blur(20px)', 
                      transform: 'translate(10px, 10px)' 
                    }}
                  />
                  <Box 
                    sx={{ 
                      position: 'relative', 
                      backgroundColor: 'background.paper', 
                      borderRadius: 2, 
                      p: 3, 
                      height: '100%',
                      border: '1px solid rgba(255, 255, 255, 0.1)' 
                    }}
                  >
                    <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                      Who I Am
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                      I'm <span style={{ color: '#e94560', fontWeight: 500 }}>B R Adithya</span>, a Computer Science student with a passion for creating innovative digital solutions. 
                      I combine technical expertise with creative problem-solving to build applications that make a difference.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      My journey in technology started with a curiosity about how things work, which evolved into a deep interest in programming and web development. 
                      I'm constantly learning and expanding my skills to stay at the forefront of technological advancements.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div 
                variants={itemVariants}
                style={{ height: '100%' }}
              >
                <Box sx={{ position: 'relative', height: '100%' }}>
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(to bottom right, rgba(15, 52, 96, 0.2), rgba(233, 69, 96, 0.2))', 
                      opacity: 0.2, 
                      borderRadius: 2,
                      filter: 'blur(20px)', 
                      transform: 'translate(-10px, 10px)' 
                    }}
                  />
                  <Box 
                    sx={{ 
                      position: 'relative', 
                      backgroundColor: 'background.paper', 
                      borderRadius: 2, 
                      p: 3, 
                      height: '100%',
                      border: '1px solid rgba(255, 255, 255, 0.1)' 
                    }}
                  >
                    <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                      My Approach
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                      I believe in creating solutions that are not only technically sound but also user-friendly and accessible. 
                      My approach combines analytical thinking with creative design to deliver exceptional results.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Whether working on a team project or individual endeavor, I bring dedication, attention to detail, and a commitment to excellence. 
                      I thrive in collaborative environments and enjoy the process of turning ideas into reality through code.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {infoCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <InfoCard elevation={0}>
                    <IconWrapper>
                      {card.icon}
                    </IconWrapper>
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {card.description}
                    </Typography>
                  </InfoCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </AboutContainer>
  );
};

export default About;