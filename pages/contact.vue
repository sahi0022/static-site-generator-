<template>
  <div class="contact-page container mt-5">
    <div class="text-center mb-5">
      <h1 class="display-3 font-weight-bold">Contact Me</h1>
      <p class="lead contact-text">I'd love to hear from you! Fill out the form below or connect with me on social media.</p>
      <hr class="my-4" style="border-color: #5c7a8c; width: 50px; border-width: 3px;">
    </div>

    <div class="row">
     
      <div class="col-12 col-md-6">
        <form @submit.prevent="submitForm" class="shadow-lg rounded-lg p-4 back">
          <div class="form-group">
            <label for="name ">Name</label>
            <input type="text" id="name" v-model="form.name" class="form-control" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" class="form-control" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" class="form-control" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn btn-gradient btn-block">Send Message</button>
        </form>
      </div>

 
      <div class="col-12 col-md-6 mt-4 mt-md-0">
        <div class="contact-details bg-custom shadow-lg rounded-lg p-4">
          <h5 class="text-white">Location</h5>
          <p><strong>Address:</strong> 123 Main Street, Cityville, USA</p>
          <p><strong>Email:</strong> <a href="mailto:Sahil@gmail.com" class="text-light">Sahil@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+11234567890" class="text-light">+1 (123) 456-7890</a></p>

          <h5 class="mt-4 text-white">Connect with Me</h5>
          <div class="social-links">
            <a href="https://linkedin.com" target="_blank" class="btn btn-social btn-linkedin mr-2 text-white">LinkedIn</a>
            <a href="https://github.com" target="_blank" class="btn btn-social btn-github mr-2 text-white">GitHub</a>
            <a href="https://twitter.com" target="_blank" class="btn btn-social btn-twitter text-white">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
     
      alert(`Thank you, ${this.form.name}! Your message has been sent.`);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  },
  head() {
    return {
      title: 'Contact - My Portfolio',
      meta: [
        { name: 'description', content: 'Get in touch with me via my contact form or social media.' }
      ]
    };
  }
};
</script>

<style scoped>
.contact-page {
  max-width: 900px;
  margin: auto;
  font-family: 'Roboto', sans-serif;
}

.back {
  background-color: #144361;
}

.contact-text {
  color: #ffffff !important ;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); 
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #b69928; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); 
}

hr {
  border-width: 3px;
  border-color: #5c7a8c;
  width: 50px;
}

.form-control {
  border-radius: 0.5rem;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: bold;
  color: #ffffff;
}

.btn-gradient {
  background: linear-gradient(45deg, #dbd3d4, #4e79b5);
  border: none;
  color: white;
  padding: 12px 20px;
  font-size: 1.1rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(45deg, #dbd3d4, #4e79b5);
  transform: scale(1.05);
}

.contact-details {
  background-color: #144361; 
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.contact-details h5 {
  font-weight: 600;
  color: #fff;
}

.contact-details p {
  font-size: 1rem;
  color: #ddd;
}

.contact-details a {
  text-decoration: none;
  color: #80b6c7; 
}

.social-links a {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.btn-social {
  display: inline-block;
  padding: 10px 20px;
  text-align: center;
  font-size: 1rem;
  color: white;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.btn-linkedin {
  background-color: #0077b5;
}

.btn-github {
  background-color: #333;
}

.btn-twitter {
  background-color: #1da1f2;
}

.btn-social:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


@media (max-width: 767px) {
  .contact-page {
    padding: 20px;
  }

  .row {
    flex-direction: column; 
  }

  .contact-details {
    margin-top: 20px;
  }


  .social-links {
    display: flex;
    flex-wrap: wrap;
  }

  .btn-social {
    margin-bottom: 10px;
  }

  .contact-text {
    font-size: 1.1rem;
  }

  h1 {
    font-size: 2rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
 
  .contact-page {
    padding: 20px;
  }

  .row {
    flex-direction: row;
  }

  .contact-details {
    margin-top: 20px;
  }
}
</style>
