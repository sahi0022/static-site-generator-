<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Featured Projects</h2>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="project in featuredProjects" :key="project.id">
        <div class="project-card shadow-lg rounded overflow-hidden">
          <img :src="project.image" class="card-img-top" :alt="project.title">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" class="btn btn-gradient btn-block">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedProjects',
  props: {
    featuredProjects: Array
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #b69928;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.project-card {
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  border: 1px solid #ddd;
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.15);
}

.project-card img {
  object-fit: cover;
  height: 200px;
}

.card-body {
  padding: 1.5rem;
  background-color: #144361;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #f8f9fa;
}

.card-text {
  color: #d2dde0;
  font-size: 1rem;
  margin-bottom: 1.25rem;
}

.btn-gradient {
  background: linear-gradient(45deg, #071c34, #A1CCDC);
  border: none;
  padding: 0.75rem;
  font-size: 1.1rem;
  text-align: center;
  color: white;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(45deg, #A1CCDC, #071c34);
  transform: scale(1.05);
}

@media (max-width: 1199px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .project-card img {
    height: 180px;
  }

  .card-body {
    padding: 1.25rem;
  }
}

@media (max-width: 991px) {
  .project-card img {
    height: 160px;
  }

  .card-body {
    padding: 1rem;
  }

  .btn-gradient {
    font-size: 1rem;
  }
}

@media (max-width: 767px) {
  h2 {
    font-size: 1.75rem;
  }

  .card-body {
    padding: 1rem;
  }

  .btn-gradient {
    font-size: 1rem;
  }

  .project-card img {
    height: 150px;
  }
}

@media (max-width: 576px) {
  h2 {
    font-size: 1.5rem;
  }

  .project-card img {
    height: 140px;
  }

  .btn-gradient {
    font-size: 0.9rem;
  }
}
</style>
