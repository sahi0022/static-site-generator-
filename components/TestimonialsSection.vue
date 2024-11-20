<template>
  <div class="testimonials-section bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-5 text-warning">What Our Clients Say</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="testimonial in testimonials" :key="testimonial.author">
          <div class="testimonial-card shadow rounded overflow-hidden position-relative">
            <div class="card-body p-4">
              <p class="testimonial-text text-center">{{ testimonial.text }}</p>
              <div class="author-info d-flex align-items-center mt-3">
                <img :src="testimonial.avatar" alt="Author Avatar" class="avatar mr-3" />
                <p class="author-name font-weight-bold mb-0">{{ testimonial.author }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  props: {
    testimonials: Array
  }
};
</script>

<style scoped>
.testimonials-section {
  background: linear-gradient(to bottom right, #071c34, #0e2446);
  padding-top: 60px;
  padding-bottom: 60px;
}

.testimonial-card {
  background-color: #d2dde0;
  border: 1px solid #ddd;
  transition: transform 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease;
  border-radius: 15px;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 5px;
  background: linear-gradient(to bottom, #ffffff, #2575fc);
  border-radius: 15px 0 0 15px;
  transition: width 0.5s ease;
}

.testimonial-card:hover {
  transform: scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  background-color: #f7f9fc;
}

.testimonial-card:hover::before {
  width: 10px;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #b69928;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.testimonial-text {
  font-size: 1.2rem;
  color: #444;
  font-style: italic;
  line-height: 1.6;
  text-align: center;
  font-family: 'Georgia', serif;
}

.author-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.author-name {
  color: #333;
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
}


@media (max-width: 1200px) {
  .col-md-4 {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
}

@media (max-width: 992px) {
  .col-md-4 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  h2 {
    font-size: 1.5rem;  
  }

  .testimonial-text {
    font-size: 1rem;  
  }

  .testimonial-card {
    margin-bottom: 20px; 
  }
}
</style>
