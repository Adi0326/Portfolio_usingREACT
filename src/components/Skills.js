import React from 'react';
import { Typography, Box, Container, Grid, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SkillsContainer = styled(Box)`
  padding: 100px 0;
  position: relative;
`;

const SkillCard = styled(Box)`
  background-color: rgba(30, 30, 30, 0.7);
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

const CustomLinearProgress = styled(LinearProgress)`
  height: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 24px;
  
  .MuiLinearProgress-bar {
    background: linear-gradient(90deg, #e94560, #0f3460);
    border-radius: 5px;
  }
`;

const TechIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 16px;
  transition: all 0.3s ease;
  
  img {
    width: 36px;
    height: 36px;
    object-fit: contain;
  }
  
  &:hover {
    transform: scale(1.1);
    background-color: rgba(233, 69, 96, 0.1);
  }
`;

const Skills = () => {
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

  // Progress bar animation is handled by MUI's LinearProgress component

  const mainSkills = [
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 80 },
    { name: "Java", level: 70 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 75 },
  ];

  const technologies = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Redux", "Responsive Design"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "Java", "RESTful APIs"]
    },
    {
      title: "Database & Cloud",
      skills: ["MySQL", "Supabase", "Firebase", "Azure", ]
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "GitHub", "Agile", "Testing"]
    }
  ];

  return (
    <SkillsContainer id="skills">
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
              My Skills
            </Typography>
            <Typography 
              variant="body1" 
              className="text-gray-300 text-center max-w-3xl mx-auto"
            >
              Here's a comprehensive overview of my technical skills and proficiency levels in various technologies.
            </Typography>
          </motion.div>

          <Grid container spacing={4} className="mb-16">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box className="relative">
                  <Box 
                    className="absolute inset-0 bg-gradient-to-br from-highlight to-accent opacity-20 rounded-lg"
                    sx={{ filter: 'blur(20px)', transform: 'translate(10px, 10px)' }}
                  />
                  <Box 
                    className="relative bg-darkCard rounded-lg p-6"
                    sx={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                  >
                    <Typography variant="h5" component="h3" className="mb-6 font-bold">
                      Technical Proficiency
                    </Typography>
                    
                    {mainSkills.map((skill, index) => (
                      <Box key={index} sx={{ mb: 3 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                          <Typography variant="body1">{skill.name}</Typography>
                          <Typography variant="body2" color="textSecondary">{skill.level}%</Typography>
                        </Box>
                        <CustomLinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            '& .MuiLinearProgress-bar': {
                              transition: 'transform 1.5s ease-in-out'
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box className="relative">
                  <Box 
                    className="absolute inset-0 bg-gradient-to-br from-accent to-highlight opacity-20 rounded-lg"
                    sx={{ filter: 'blur(20px)', transform: 'translate(-10px, 10px)' }}
                  />
                  <Box 
                    className="relative bg-darkCard rounded-lg p-6"
                    sx={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                  >
                    <Typography variant="h5" component="h3" className="mb-6 font-bold">
                      Technologies & Tools
                    </Typography>
                    
                    <Grid container spacing={2}>
                      {technologies.map((tech, index) => (
                        <Grid item xs={3} sm={2} key={index}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="flex flex-col items-center"
                          >
                            <TechIcon>
                              <img src={tech.icon} alt={tech.name} />
                            </TechIcon>
                            <Typography variant="caption" align="center">
                              {tech.name}
                            </Typography>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <SkillCard>
                    <Typography variant="h6" component="h3" className="mb-4 font-bold">
                      {category.title}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {category.skills.map((skill, i) => (
                        <Typography component="li" variant="body2" key={i} sx={{ mb: 1 }}>
                          {skill}
                        </Typography>
                      ))}
                    </Box>
                  </SkillCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </SkillsContainer>
  );
};

export default Skills;