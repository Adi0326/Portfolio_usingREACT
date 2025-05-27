import React, { useState } from 'react';
import { Typography, Box, Container, Grid, TextField, Button, Paper, IconButton, Link, Tooltip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Email, Phone, LocationOn, GitHub, LinkedIn, Code, Send, CheckCircle } from '@mui/icons-material';

const ContactContainer = styled(Box)`
  padding: 100px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, rgba(15, 52, 96, 0.2), transparent 40%),
                radial-gradient(circle at bottom right, rgba(233, 69, 96, 0.1), transparent 40%);
    z-index: -1;
  }
`;

const ContactCard = styled(Paper)`
  background-color: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  height: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(233, 69, 96, 0.3);
    transform: translateY(-5px);
  }
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  cursor: pointer;
`;

const IconBox = styled(Box)`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(45deg, #e94560, #0f3460);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(233, 69, 96, 0.3);
`;

const SocialIconButton = styled(IconButton)`
  background-color: rgba(255, 255, 255, 0.05);
  margin-right: 16px;
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  
  &:hover {
    background-color: #e94560;
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(233, 69, 96, 0.4);
  }
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 24px;
  
  .MuiOutlinedInput-root {
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
    
    fieldset {
      border-color: rgba(255, 255, 255, 0.1);
    }
    
    &:hover fieldset {
      border-color: rgba(255, 255, 255, 0.3);
    }
    
    &.Mui-focused fieldset {
      border-color: #e94560;
    }
  }
  
  .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.7);
    
    &.Mui-focused {
      color: #e94560;
    }
  }
  
  .MuiInputBase-input {
    color: #f5f5f5;
  }
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #e94560, #0f3460);
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(233, 69, 96, 0.3);
  }
`;

const SocialContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const SocialLabel = styled(Typography)`
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(to right, #e94560, #0f3460);
    border-radius: 3px;
  }
`;

const CopyNotification = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(30, 30, 30, 0.9);
  border: 1px solid rgba(233, 69, 96, 0.5);
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log(formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
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

  const socialIconVariants = {
    hover: { 
      y: -8, 
      scale: 1.1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  return (
    <ContactContainer id="contact">
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
              Get In Touch
            </Typography>
            <Typography 
              variant="body1" 
              className="text-gray-300 text-center max-w-3xl mx-auto"
            >
              Have a question or want to work together? Feel free to contact me using the form below or through my social media channels.
            </Typography>
          </motion.div>

          {/* Contact Information - Centered */}
          <Grid container justifyContent="center" spacing={6}>
            <Grid item xs={12} md={8} lg={6}>
              <motion.div variants={itemVariants}>
                <ContactCard elevation={0} sx={{ textAlign: 'center', mb: 6 }}>
                  <Typography variant="h5" component="h3" className="mb-8 font-bold" sx={{ textAlign: 'center' }}>
                    Contact Information
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    <Tooltip title="Click to copy email address">
                      <ContactInfoItem 
                        whileHover={{ scale: 1.05 }}
                        onClick={() => copyToClipboard('pranamadithya15@gmail.com', 'Email')}
                        sx={{ justifyContent: 'center', cursor: 'pointer' }}
                      >
                        <IconBox>
                          <Email />
                        </IconBox>
                        <Box>
                          <Typography variant="body2" color="textSecondary" gutterBottom>
                            Email
                          </Typography>
                          <Typography variant="body1" sx={{ wordBreak: 'break-all' }}>
                            pranamadithya15@gmail.com
                          </Typography>
                        </Box>
                      </ContactInfoItem>
                    </Tooltip>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
                      <Tooltip title="View GitHub profile">
                        <Link 
                          href="https://github.com/Adi0326" 
                          target="_blank" 
                          underline="none"
                          sx={{ color: 'inherit' }}
                        >
                          <ContactInfoItem 
                            whileHover={{ scale: 1.05 }}
                            sx={{ justifyContent: 'center' }}
                          >
                            <IconBox>
                              <GitHub />
                            </IconBox>
                            <Box>
                              <Typography variant="body2" color="textSecondary" gutterBottom>
                                GitHub
                              </Typography>
                              <Typography variant="body1">
                                github.com/Adi0326
                              </Typography>
                            </Box>
                          </ContactInfoItem>
                        </Link>
                      </Tooltip>
                      
                      <Tooltip title="View LinkedIn profile">
                        <Link 
                          href="https://www.linkedin.com/in/b-r-adithya-4751bb25a" 
                          target="_blank" 
                          underline="none"
                          sx={{ color: 'inherit' }}
                        >
                          <ContactInfoItem 
                            whileHover={{ scale: 1.05 }}
                            sx={{ justifyContent: 'center' }}
                          >
                            <IconBox>
                              <LinkedIn />
                            </IconBox>
                            <Box>
                              <Typography variant="body2" color="textSecondary" gutterBottom>
                                LinkedIn
                              </Typography>
                              <Typography variant="body1">
                                B R Adithya
                              </Typography>
                            </Box>
                          </ContactInfoItem>
                        </Link>
                      </Tooltip>
                    </Box>
                    
                    <ContactInfoItem 
                      whileHover={{ scale: 1.05 }}
                      sx={{ justifyContent: 'center' }}
                    >
                      <IconBox>
                        <LocationOn />
                      </IconBox>
                      <Box>
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                          Location
                        </Typography>
                        <Typography variant="body1">
                          Bangalore, India
                        </Typography>
                      </Box>
                    </ContactInfoItem>
                  </Box>
                  
                  <Box mt={6}>
                    <SocialLabel variant="h6" gutterBottom sx={{ textAlign: 'center', '&:after': { left: '50%', transform: 'translateX(-50%)' } }}>
                      Connect with me
                    </SocialLabel>
                    <SocialContainer>
                      <Tooltip title="GitHub: Adi0326">
                        <Link href="https://github.com/Adi0326" target="_blank" underline="none">
                          <motion.div variants={socialIconVariants} whileHover="hover">
                            <SocialIconButton color="inherit" aria-label="github">
                              <GitHub />
                            </SocialIconButton>
                          </motion.div>
                        </Link>
                      </Tooltip>
                      
                      <Tooltip title="LinkedIn: B R Adithya">
                        <Link href="https://www.linkedin.com/in/b-r-adithya-4751bb25a" target="_blank" underline="none">
                          <motion.div variants={socialIconVariants} whileHover="hover">
                            <SocialIconButton color="inherit" aria-label="linkedin">
                              <LinkedIn />
                            </SocialIconButton>
                          </motion.div>
                        </Link>
                      </Tooltip>
                      
                      <Tooltip title="Portfolio Projects">
                        <Link href="#projects" underline="none">
                          <motion.div variants={socialIconVariants} whileHover="hover">
                            <SocialIconButton color="inherit" aria-label="projects">
                              <Code />
                            </SocialIconButton>
                          </motion.div>
                        </Link>
                      </Tooltip>
                    </SocialContainer>
                  </Box>
                </ContactCard>
              </motion.div>
            </Grid>
          </Grid>
          
          {/* Contact Form */}
          <Grid container justifyContent="center" spacing={6}>
            <Grid item xs={12} md={8} lg={6}>
              <motion.div variants={itemVariants}>
                <ContactCard elevation={0}>
                  <Typography variant="h5" component="h3" className="mb-6 font-bold" sx={{ textAlign: 'center' }}>
                    Send Me a Message
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <StyledTextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <StyledTextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          multiline
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <SubmitButton
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            endIcon={formSubmitted ? <CheckCircle /> : <Send />}
                            disabled={formSubmitted}
                          >
                            {formSubmitted ? 'Message Sent!' : 'Send Message'}
                          </SubmitButton>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </form>
                </ContactCard>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      
      <AnimatePresence>
        {copied && (
          <CopyNotification
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle sx={{ color: '#4caf50' }} />
            <Typography variant="body2">
              {copiedText} copied to clipboard!
            </Typography>
          </CopyNotification>
        )}
      </AnimatePresence>
    </ContactContainer>
  );
};

export default Contact;