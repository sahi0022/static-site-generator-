<template>
  <div class="hero-wrapper">
    <div class="hero-image-container">
      <img src="/static-site-generator-/Images/Sahil.jpg" alt="Project Image" class="hero-image">

    </div>
    <div class="hero-content">
      <h1 class="display-6">Hi, I'm Sahil</h1>
      <p class="lead f">Discover my journey in web development and digital design.</p>
      <hr class="my-4">
      <p>Check out my latest projects, dive into my skills, and let's connect to create something amazing together.</p>
      <a class="btn view btn-lg" href="/projects" role="button">Explore My Portfolio</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
.f {
  color: #d2dde0 !important;
}
.hero-wrapper {
  display: flex;
  align-items: center;
  padding: 2.5rem;
  background-color: #144361;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  max-width: 1000px;
  margin: 2rem auto;
  flex-wrap: wrap; 
}

.hero-image-container {
  flex-shrink: 0;
  margin-right: 10rem;
}

.hero-image {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #007bff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.hero-content {
  max-width: 600px;
}

.display-6 {
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.lead {
  font-size: 1.1rem;
  color: #555555;
  margin-bottom: 1rem;
}

.btn-lg {
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
}

.view {
  background: linear-gradient(145deg, #abc0ce, #d3e8ec);
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.view:hover {
  background: linear-gradient(145deg, #F4EEE1, #C0CED1);
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  color: #333;
}

.view:focus {
  outline: none;
}


@media (max-width: 1024px) {
  .hero-wrapper {
    flex-direction: column;
    padding: 1.5rem;
    margin: 1rem;
  }

  .hero-image-container {
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .hero-image {
    width: 120px;
    height: 120px;
  }

  .display-6 {
    font-size: 2.2rem;
  }

  .lead {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .hero-wrapper {
    padding: 1rem;
  }

  .hero-image {
    width: 100px;
    height: 100px;
  }

  .display-6 {
    font-size: 1.8rem;
  }

  .lead {
    font-size: 0.9rem;
  }

  .btn-lg {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero-wrapper {
    padding: 0.8rem;
  }

  .hero-image {
    width: 90px;
    height: 90px;
  }

  .display-6 {
    font-size: 1.6rem;
  }

  .lead {
    font-size: 0.85rem;
  }

  .btn-lg {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
