import React from 'react';
import { Typography, Box, Container, Grid, Paper, Divider, Button, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { GitHub, Language, Code, Web, Storage, Devices, CloudQueue } from '@mui/icons-material';

const ProjectsContainer = styled(Box)`
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

const ChipContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  margin-bottom: 16px;
`;

const FeaturedProjectCard = styled(Paper)`
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

const Projects = () => {
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

  // Timeline projects (similar to Experience section)
  const timelineProjects = [
    {
      id: 1,
      title: "College Management System",
      role: "Full Stack Developer",
      date: "2023",
      description: "A comprehensive system for managing college resources, student information, and academic processes. Implemented role-based access control for administrators, faculty, and students.",
      icon: <Web />,
      position: "right",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/adi0326/college-management",
      live: "https://college-management-demo.netlify.app"
    },
    {
      id: 2,
      title: "Public Schemes Service Navigator",
      role: "Frontend Developer",
      date: "2022",
      description: "A web application that helps citizens find and access government welfare schemes and services. Users can search for schemes based on categories, eligibility, or keywords.",
      icon: <CloudQueue />,
      position: "left",
      technologies: ["React", "Node.js", "MongoDB", "Government APIs"],
      github: "https://github.com/adi0326/public-schemes-navigator",
      live: "https://schemes-navigator.netlify.app"
    },
    {
      id: 3,
      title: "AI-powered Content Generator",
      role: "Backend Developer",
      date: "2022",
      description: "An intelligent system for generating creative content using transformer-based language models. Allows users to input a prompt and receive AI-generated output.",
      icon: <Code />,
      position: "right",
      technologies: ["Flask", "Python", "Transformers", "Hugging Face", "HTML/CSS"],
      github: "https://github.com/adi0326/ai-content-generator",
      live: "https://ai-content-generator-demo.netlify.app"
    },
    {
      id: 4,
      title: "Portfolio Website",
      role: "UI/UX Designer & Developer",
      date: "2021",
      description: "My personal portfolio website showcasing my skills, projects, and professional experience. Built with React and enhanced with animations using Framer Motion.",
      icon: <Devices />,
      position: "left",
      technologies: ["React", "Material UI", "Framer Motion", "Styled Components"],
      github: "https://github.com/adi0326/portfolio",
      live: "https://adithya-br.netlify.app"
    }
  ];

  // Featured projects (similar to Achievements section)
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
      icon: <Storage />,
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location-based forecasts and interactive maps.",
      icon: <CloudQueue />,
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Leaflet"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      icon: <Code />,
      technologies: ["React", "Firebase", "Material UI", "PWA"]
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Interactive game with multiple difficulty levels and game statistics tracking.",
      icon: <Devices />,
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage API"]
    }
  ];

  return (
    <ProjectsContainer id="projects">
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
              My Projects
            </Typography>
            <Typography 
              variant="body1" 
              className="text-gray-300 text-center max-w-3xl mx-auto"
            >
              A timeline of my key projects and development work, showcasing my technical skills and problem-solving abilities.
            </Typography>
          </motion.div>

          {/* Timeline Projects Section (similar to Experience) */}
          <TimelineContainer className="mb-16">
            {timelineProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="w-full"
              >
                <TimelineItem sx={{ 
                  justifyContent: project.position === 'left' ? 'flex-start' : 'flex-end',
                  '@media (max-width: 900px)': {
                    justifyContent: 'flex-start'
                  }
                }}>
                  <TimelineDot>
                    {project.icon}
                  </TimelineDot>
                  <TimelineDate position={project.position}>
                    {project.date}
                  </TimelineDate>
                  <TimelineContent elevation={0}>
                    <Typography variant="h6" component="h3" className="font-bold">
                      {project.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" className="mb-2">
                      {project.role}
                    </Typography>
                    <Divider sx={{ my: 1.5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <Typography variant="body2" paragraph>
                      {project.description}
                    </Typography>
                    <ChipContainer>
                      {project.technologies.map((tech, i) => (
                        <Chip 
                          key={i} 
                          label={tech} 
                          size="small" 
                          sx={{ 
                            backgroundColor: 'rgba(233, 69, 96, 0.1)', 
                            color: '#e94560',
                            borderRadius: '4px'
                          }} 
                        />
                      ))}
                    </ChipContainer>
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                      <Button 
                        startIcon={<GitHub />}
                        size="small"
                        variant="outlined"
                        sx={{ 
                          borderColor: 'rgba(255, 255, 255, 0.3)', 
                          color: '#f5f5f5',
                          '&:hover': { borderColor: '#f5f5f5' }
                        }}
                      >
                        Code
                      </Button>
                      <Button 
                        startIcon={<Language />}
                        size="small"
                        variant="contained"
                        sx={{ 
                          backgroundColor: '#e94560',
                          '&:hover': { backgroundColor: '#d13652' }
                        }}
                      >
                        Demo
                      </Button>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            ))}
          </TimelineContainer>

          {/* Featured Projects Section (similar to Achievements) */}
          <Typography 
            variant="h4" 
            component="h3" 
            className="text-center mb-8 font-bold"
          >
            Other Notable Projects
          </Typography>

          <Grid container spacing={4}>
            {featuredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FeaturedProjectCard elevation={0}>
                    <IconWrapper>
                      {project.icon}
                    </IconWrapper>
                    <Typography variant="h6" component="h4" className="mb-2 font-bold">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-300" paragraph>
                      {project.description}
                    </Typography>
                    <ChipContainer>
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Chip 
                          key={i} 
                          label={tech} 
                          size="small" 
                          sx={{ 
                            backgroundColor: 'rgba(233, 69, 96, 0.1)', 
                            color: '#e94560',
                            borderRadius: '4px'
                          }} 
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip 
                          label={`+${project.technologies.length - 3}`} 
                          size="small" 
                          sx={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                            color: '#f5f5f5',
                            borderRadius: '4px'
                          }} 
                        />
                      )}
                    </ChipContainer>
                  </FeaturedProjectCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;