<!-- pages/index.vue -->
<template>
    <div class="background">
      <HeroSection />
      <FeaturedProjects :featuredProjects="featuredProjects" />
      <SkillsSection :skills="skills" />
      <TestimonialsSection :testimonials="testimonials" />
      
    </div>
  </template>
  
  <script>
  import HeroSection from '~/components/HeroSection.vue';
  import FeaturedProjects from '~/components/FeaturedProjects.vue';
  import SkillsSection from '~/components/SkillsSection.vue';
  import TestimonialsSection from '~/components/TestimonialsSection.vue';
  
  export default {
    components: {
      HeroSection,
      FeaturedProjects,
      SkillsSection,
      TestimonialsSection
      
    },
   
  data() {
    return {
      featuredProjects: [
        {
          id: 1,
          title: 'Personal Portfolio Website',
          description: 'A visually dynamic portfolio website built with Vue.js and Tailwind CSS to showcase projects and skills.',
          image: '/static-site-generator-/Images/portfolio-website.jpg',  
          link: '#'
        },
        {
          id: 2,
          title: 'E-commerce Dashboard',
          description: 'An admin dashboard for managing products, orders, and analytics built with Node.js, Express, and MongoDB.',
          image: '/static-site-generator-/Images/ecommerce-dashboard.jpg', 
          link: '#'
        },
        {
          id: 3,
          title: 'Social Media Analytics App',
          description: 'A mobile app for tracking and analyzing social media engagement, developed using React Native and integrated with Twitter API.',
          image: '/static-site-generator-/Images/social-media-analytics.jpg', 
          link: '#'
        }
      ],
      skills: [
        { name: 'HTML', level: 'Expert', percent: '85' },
        { name: 'CSS', level: 'Expert', percent: '80' },
        { name: 'JavaScript', level: 'Advanced', percent: '75' },
        { name: 'Vue.js', level: 'Advanced', percent: '90' }
      
      ],
      testimonials: [
        {
          text: "Their expertise brought my project vision to life, and their dedication was truly impressive.",
          author: "Emily Johnson",
          avatar: "https://randomuser.me/api/portraits/women/25.jpg"
        },
        {
          text: "The team consistently delivered high-quality work, making the entire process smooth ",
          author: "Michael Lee",
          avatar: "https://randomuser.me/api/portraits/men/30.jpg"
        },
        {
          text: "Incredible attention to detail! They exceeded all my expectations and were fantastic to work with.",
          author: "Sophia Brown",
          avatar: "https://randomuser.me/api/portraits/women/40.jpg"
        }
      ]
    };
  }
};

  </script>
  