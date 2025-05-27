import React from 'react';
import { Typography, Box, Container, Grid, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Work, School, EmojiEvents, Code } from '@mui/icons-material';

const ExperienceContainer = styled(Box)`
  padding: 100px 0;
  position: relative;
  background-color: rgba(26, 26, 46, 0.3);
`;

const TimelineContainer = styled(Box)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: linear-gradient(to bottom, transparent, #e94560, transparent);
    transform: translateX(-50%);
    
    @media (max-width: 900px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(Box)`
  display: flex;
  margin-bottom: 60px;
  position: relative;
  
  @media (max-width: 900px) {
    flex-direction: column;
    margin-left: 40px;
  }
`;

const TimelineContent = styled(Paper)`
  background-color: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  width: calc(50% - 30px);
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(233, 69, 96, 0.3);
  }
  
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const TimelineDot = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, #e94560, #0f3460);
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  @media (max-width: 900px) {
    left: -40px;
  }
`;

const TimelineDate = styled(Box)`
  position: absolute;
  top: 30px;
  width: 120px;
  text-align: center;
  font-weight: 500;
  color: #e94560;
  
  ${props => props.position === 'left' ? `
    right: -150px;
  ` : `
    left: -150px;
  `}
  
  @media (max-width: 900px) {
    position: relative;
    top: -10px;
    left: 0;
    right: 0;
    margin-bottom: 10px;
    text-align: left;
  }
`;

const AchievementCard = styled(Paper)`
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
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Experience = () => {
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

  const timelineItems = [
    {
      id: 1,
      title: "Metadome Emerging Tech Hackathon",
      role: "Participant",
      date: "March 2023",
      description: "Developed an innovative AR solution for retail experiences. Our team created a virtual try-on application that allows users to visualize products in their environment before purchasing.",
      icon: <Code />,
      position: "right"
    },
    {
      id: 2,
      title: "Technical Webinar Series",
      role: "Organizer",
      date: "January 2023",
      description: "Organized and moderated a series of technical webinars on emerging technologies. Coordinated with speakers, managed logistics, and facilitated Q&A sessions for an audience of over 200 participants.",
      icon: <School />,
      position: "left"
    },
    {
      id: 3,
      title: "Web Development Workshop",
      role: "Instructor",
      date: "November 2022",
      description: "Conducted a hands-on workshop on modern web development techniques. Taught participants how to build responsive websites using HTML, CSS, and JavaScript, with a focus on best practices and performance optimization.",
      icon: <Work />,
      position: "right"
    },
    {
      id: 4,
      title: "College Tech Fest",
      role: "Technical Lead",
      date: "September 2022",
      description: "Led the technical team for the annual college tech fest. Managed a team of 10 students to develop the event website, registration system, and digital displays for various competitions and exhibitions.",
      icon: <EmojiEvents />,
      position: "left"
    }
  ];

  const achievements = [
    {
      title: "Hackathon Finalist",
      description: "Reached the finals of the National Coding Hackathon, competing against 200+ teams from across the country.",
      icon: <EmojiEvents />
    },
    {
      title: "Technical Paper Publication",
      description: "Published a research paper on 'Efficient Algorithms for Data Processing' in the International Journal of Computer Science.",
      icon: <School />
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to several open-source projects, with over 50 accepted pull requests on GitHub.",
      icon: <Code />
    },
    {
      title: "Workshop Facilitator",
      description: "Conducted multiple technical workshops reaching over 500 students, teaching web development and programming concepts.",
      icon: <Work />
    }
  ];

  return (
    <ExperienceContainer id="experience">
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <Typography 
              variant="h3" 
              component="h2" 
              className="section-title text-center"
              gutterBottom
            >
              Experience & Achievements
            </Typography>
            <Typography 
              variant="body1" 
              className="text-gray-300 text-center max-w-3xl mx-auto"
            >
              A timeline of my professional journey, key experiences, and notable achievements.
            </Typography>
          </motion.div>

          <TimelineContainer className="mb-16">
            {timelineItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="w-full"
              >
                <TimelineItem sx={{ 
                  justifyContent: item.position === 'left' ? 'flex-start' : 'flex-end',
                  '@media (max-width: 900px)': {
                    justifyContent: 'flex-start'
                  }
                }}>
                  <TimelineDot>
                    {item.icon}
                  </TimelineDot>
                  <TimelineDate position={item.position}>
                    {item.date}
                  </TimelineDate>
                  <TimelineContent elevation={0}>
                    <Typography variant="h6" component="h3" className="font-bold">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" className="mb-2">
                      {item.role}
                    </Typography>
                    <Divider sx={{ my: 1.5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <Typography variant="body2">
                      {item.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            ))}
          </TimelineContainer>

          <Typography 
            variant="h4" 
            component="h3" 
            className="text-center mb-8 font-bold"
          >
            Notable Achievements
          </Typography>

          <Grid container spacing={4}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <AchievementCard elevation={0}>
                    <IconWrapper>
                      {achievement.icon}
                    </IconWrapper>
                    <Typography variant="h6" component="h4" className="mb-2 font-bold">
                      {achievement.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-300">
                      {achievement.description}
                    </Typography>
                  </AchievementCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </ExperienceContainer>
  );
};

export default Experience;