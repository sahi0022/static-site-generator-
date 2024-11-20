<template>
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container-fluid">
      <a class="navbar-brand brand" href="/">My Portfolio</a>
      <button class="navbar-toggler custom-toggler" type="button" @click="toggleMenu">
        <img :src="isNavOpen ? '/mtm6407-static-site-rama0113ac/images/icon-close-menu.svg' : '/mtm6407-static-site-rama0113ac/images/icon-menu.svg'" alt="Menu Toggle" class="menu-icon" />
      </button>
      <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item text-white"><router-link class="nav-link" to="/" @click="navigateTo('/')">Home</router-link></li>
            <li class="nav-item text-white"><router-link class="nav-link" to="/about" @click="navigateTo('/about')">About</router-link></li>
            <li class="nav-item text-white"><router-link class="nav-link" to="/projects" @click="navigateTo('/projects')">Projects</router-link></li> 
            <li class="nav-item text-white"><router-link class="nav-link" to="/blog" @click="navigateTo('/blog')">Blog</router-link></li>
            <li class="nav-item text-white"><router-link class="nav-link" to="/contact" @click="navigateTo('/contact')">Contact</router-link></li>
          
          
        </ul>
      </div>
    </div>
    <div class="navbar-overlay" v-if="isNavOpen">
      <button class="close-btn" @click="toggleMenu">
        <img src="@/assets/images/icon-close-menu.svg" alt="Close Menu" class="close-icon" />
      </button>
      <ul class="navbar-nav">
      
        <li class="nav-item text-white"><router-link to="/"  @click="toggleMenu">Home</router-link></li>
        <li class="nav-item text-white"><router-link to="/about" @click="toggleMenu">About</router-link></li>
        <li class="nav-item text-white"><router-link to="/projects" @click="toggleMenu">Projects</router-link></li>
        <li class="nav-item text-white"><router-link to="/blog" @click="toggleMenu">Blog</router-link></li>
        <li class="nav-item text-white"><router-link to="/contact" @click="toggleMenu">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isNavOpen = !this.isNavOpen;
      const body = document.body;
      if (this.isNavOpen) {
        body.classList.add('blurred');
      } else {
        body.classList.remove('blurred');
      }
    },
  },
};
</script>

<style scoped>
.custom-navbar {
  background: linear-gradient(45deg, #071c34, #071c34);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.brand {
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: #ffffff !important;
  letter-spacing: 1px;
}

.nav-link {
  font-size: 1.1rem;
  font-weight: 500;
  color: #ffffff !important;
  margin-left: 20px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #f1faee !important;
  transform: scale(1.05);
}

.custom-toggler {
  background: none;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
}

.menu-icon {
  width: 24px;
  height: 24px;
  filter: invert(100%) brightness(2);
}

.navbar-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(7, 28, 52, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 999;
  padding-top: 60px;
  backdrop-filter: blur(5px);
}

.close-btn {
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.close-icon {
  width: 24px;
  height: 24px;
  filter: invert(100%) brightness(2);
}

body.blurred {
  filter: blur(5px);
}

@media (min-width: 992px) {
  .navbar-overlay {
    display: none;
  }
}
</style>
