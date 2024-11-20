<template>
  <div class="projects-page container mt-5">
    <featured-projects :featuredProjects="projects" />
  </div>
</template>

<script>
import FeaturedProjects from '@/components/FeaturedProjects.vue';

export default {
  components: {
    FeaturedProjects
  },
  data() {
    return {
      projects: [
        {
          title: 'TaskMaster Pro',
          description: 'A productivity app that allows users to create, organize, and prioritize tasks seamlessly.',
          image: '/static-site-generator-/Images/taskmaster-pro.jpg', 
          link: '#'
        },
        {
          title: 'ShopEase',
          description: 'An e-commerce platform offering a smooth shopping experience with integrated payment options.',
          image: '/static-site-generator-/Images/shopease.jpg', 
          link: '#'
        },
        {
          title: 'DataViz Hub',
          description: 'An interactive tool for real-time data visualization, built with Vue and D3.js for in-depth analytics.',
          image: '/static-site-generator-/Images/dataviz-hub.jpg', 
          link: '#'
        },
        {
          title: 'HealthTrack',
          description: 'A health and fitness tracker with personalized goal-setting and daily progress monitoring.',
          image: '/static-site-generator-/Images/healthtrack.jpg', 
          link: '#'
        },
        {
          title: 'EcoFinder',
          description: 'An environmental impact calculator that helps users track and reduce their carbon footprint.',
          image: '/static-site-generator-/Images/ecofinder.jpg',  
          link: '#'
        },
        {
          title: 'Artfolio',
          description: 'An online portfolio platform for artists to showcase their work in a visually stunning gallery format.',
          image: '/static-site-generator-/Images/artfolio.jpg', 
          link: '#'
        }
      ]
    };
  },
  head() {
    return {
      title: 'Projects - My Portfolio',
      meta: [
        { name: 'description', content: 'Explore a diverse range of projects that highlight my skills in development, design, and data-driven applications.' }
      ]
    };
  }
};
</script>

<style scoped>
.projects-page {
  max-width: 1200px;
  margin: auto;
}

h1, .card-title {
  font-weight: bold;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #b69928;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); 
}

.card:hover {
  transform: scale(1.03);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-text {
  font-size: 0.9rem;
  color: #6c757d;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}


@media (min-width: 576px) {
  .card-columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (min-width: 768px) {
  .card-columns {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 992px) {
  .card-columns {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1200px) {
  .card-columns {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
