<template>
  <div class="contact-form-container my-5">
    <h2 class="text-center form-title">Contact Me</h2>
    <form class="contact-form p-4" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-control" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" class="form-control" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" class="form-control" v-model="form.message" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn submit-button">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
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
  }
};
</script>

<style scoped>
.contact-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.contact-form {
  max-width: 500px;
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-form:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.form-title {
  font-family: 'Poppins', sans-serif;
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
  position: relative;
  text-align: center;
}

.form-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: #2575fc;
  margin: 10px auto 0;
  border-radius: 2px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  font-weight: bold;
  color: #555;
  display: block;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.75rem;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #2575fc;
  box-shadow: 0 0 5px rgba(37, 117, 252, 0.3);
  outline: none;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  border: none;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.submit-button:hover {
  transform: translateY(-2px);
  background: linear-gradient(90deg, #5a0ecb, #1e63fc);
}

.submit-button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(37, 117, 252, 0.3);
}
</style>
