<template>
  <div class="about-page mt-5">

    <div class="text-center mb-5">
      <h1 class="display-4">About Me</h1>
      <p class="lead welcome-text">Welcome! I’m a web developer who thrives on turning ideas into interactive digital experiences.</p>
      <hr class="my-4 mx-auto" style="width: 50%; border-top: 2px solid #0b72b9;">
    </div>

 
    <section class="background mb-5 p-4 shadow-sm rounded intro">
      <div class="section-header d-flex align-items-center mb-3">
        <h2 class="m-0 text-white">Background</h2>
      </div>
      <p class="text-white">
        My journey in web development began with a deep curiosity about how the web works. With a background in computer science and hands-on experience building websites and web apps, I’ve developed a versatile skill set. Each project, from business sites to dynamic applications, has taught me the value of adaptability and problem-solving.
      </p>
    </section>

    <section class="skills mb-5">
      <SkillsSection :skills="skills" />
    </section>

 
    <section class="hobbies py-5 rounded shadow-sm mb-5">
      <div class="container text-center">
        <h2 class="text-primary mb-4">Hobbies & Interests</h2>
        <p class="text-white lead">
          Outside of development, I’m someone who enjoys exploring new perspectives. Whether it’s reading a thought-provoking novel, hiking through a scenic trail, or experimenting with creative hobbies, I believe that balance and exploration fuel my work.
        </p>
      </div>
    </section>


    <section class="vision py-5 rounded shadow-sm mb-5">
      <div class="container text-center">
        <h2 class="text-primary mb-4">My Vision</h2>
        <p class="text-white lead">
          I aim to build websites that don’t just serve a function but make a difference. I’m dedicated to lifelong learning, seeking out meaningful projects, and always pushing the boundaries of what’s possible with technology.
        </p>
      </div>
    </section>

  
    <div class="text-center mt-5">
      <a class="btn btn-gradient shadow" href="/contact" role="button">Let’s Connect</a>
    </div>
  </div>
</template>

<script>
import SkillsSection from '@/components/SkillsSection.vue';

export default {
  components: {
    SkillsSection,
  },
  data() {
    return {
      skills: [
        { name: 'HTML5', level: 'Expert', percent: 90 },
        { name: 'CSS3', level: 'Advanced', percent: 85 },
        { name: 'JavaScript', level: 'Advanced', percent: 80 },
        { name: 'Vue.js', level: 'Intermediate', percent: 75 },
      ],
    };
  },
  head() {
    return {
      title: 'About Me - My Portfolio',
      meta: [
        { name: 'description', content: 'Learn more about me, my background, skills, and vision for creating impactful web solutions.' },
      ],
    };
  },
};
</script>

<style scoped>
.about-page {
  max-width: 900px;
  margin: auto;
}

h1, h2 {
  font-weight: bold;
}

.welcome-text {
  color: #ffffff !important; 
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

.display-4 {
  font-size: 2.5rem;
  font-weight: 600;
}

.lead {
  font-size: 1.25rem;
  color: #495057;
}


.btn-lg {
  padding: 0.75rem 1.5rem;
  background-color: #0b72b9;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
}

.btn-lg:hover {
  background-color: #084b7b;
}


.background, .hobbies, .vision {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-header h2 {
  font-weight: bold;
}

.text-muted {
  font-size: 1rem;
  line-height: 1.6;
  color: #6c757d;
}


.mb-5 {
  margin-bottom: 3rem;
}

.bg-light {
  background-color: #f8f9fa;
}

.container {
  max-width: 80%;
  margin: auto;
}


.intro {
  background-color: #1b3a57;
}

.hobbies h2, .vision h2 {
  font-weight: bold;
  color: #fff;
}

.lead {
  font-size: 1.1rem;
}

.text-center {
  text-align: center;
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


@media (max-width: 1200px) {
  .display-4 {
    font-size: 2.8rem;
  }

  .welcome-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 90%;
  }

  .display-4 {
    font-size: 2.8rem;
  }

  .lead {
    font-size: 1.15rem;
  }

  .btn-lg {
    padding: 0.6rem 1.2rem;
  }
}

@media (max-width: 768px) {
  .about-page {
    max-width: 100%;
    padding: 15px;
  }

  .welcome-text {
    font-size: 1.1rem;
  }

  .display-4 {
    font-size: 2.5rem;
  }

  .lead {
    font-size: 1rem;
  }

  .btn-lg {
    padding: 0.5rem 1rem;
  }

  .background, .hobbies, .vision {
    padding: 15px;
  }
}

@media (max-width: 576px) {
  .display-4 {
    font-size: 2.2rem;
  }

  .lead {
    font-size: 0.9rem;
  }

  .btn-lg {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }

  .background, .hobbies, .vision {
    padding: 10px;
  }

  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
