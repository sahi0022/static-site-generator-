<template>
  <div class="blog-page container mt-5">
    <div class="text-center mb-5">
      <h1 class="display-3 font-weight-bold">Blog</h1>
      <p class="lead Blog-text">Insights, tutorials, and articles on web development, design, and technology trends.</p>
      <hr class="my-4" style="border-color: #5c7a8c; width: 50px; border-width: 3px;">
    </div>

    <section class="blog-list row">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="post in posts" :key="post.title">
        <div class="card blog-card h-100 shadow-lg rounded-lg overflow-hidden">
       
          <div class="card-header bg-primary text-white text-center">
            <h5 class="card-title">{{ post.title }}</h5>
          </div>
          
        
          <img :src="post.image" class="card-img-top" :alt="post.title">

         
          <div class="card-body p-4">
            <p class="card-text text-muted">{{ truncateExcerpt(post.excerpt, 20) }}</p> 
            
           
            <p class="publish-date-time text-info">Published on: {{ post.publishDate }}</p>
            
           
            <p class="view-count text-success">Views: {{ post.views }}</p>

            <a :href="post.link" class="btn btn-gradient w-100" target="_blank">Read More</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: 'Responsive Web Design',
          excerpt: 'Explore the key principles of responsive web design and how to make websites look great on all devices.',
          image: '/static-site-generator-/Images/responsive-design.jpg',
          link: '#',
          publishDate: '2024-11-05',
          views: 650
        },
        {
          title: 'JavaScript Asynchronous',
          excerpt: 'A beginner-friendly guide to understanding asynchronous programming in JavaScript with promises and async/await.',
          image: '/static-site-generator-/Images/js-async.jpg',
          link: '#',
          publishDate: '2024-10-30',
          views: 720
        },
        {
          title: 'CSS Flexbox Layouts',
          excerpt: 'A step-by-step breakdown of the CSS Flexbox model, its properties, and how to build flexible layouts.',
          image: '/static-site-generator-/Images/css-flexbox.jpg',
          link: '#',
          publishDate: '2024-10-25',
          views: 430
        }
      ]
    };
  },
  methods: {
    truncateExcerpt(excerpt, wordCount) {
      const words = excerpt.split(' ');
      if (words.length <= wordCount) {
        return excerpt;
      } else {
        return words.slice(0, wordCount).join(' ') + '...'; 
      }
    }
  },
  head() {
    return {
      title: 'Blog - My Portfolio',
      meta: [
        { name: 'description', content: 'Read my blog for insights, tutorials, and latest trends in web development and design.' }
      ]
    };
  }
}
</script>

<style scoped>
.blog-page {
  max-width: 1200px;
  margin: auto;
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #b69928; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); 
}

.Blog-text {
  color: #ffffff !important ; 
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); 
}

.card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: none;
  display: flex;
  flex-direction: column;
}

.card-header {
  background-color: #144361 !important; 
  color: white;
  padding: 1rem;
}

.card-header h5 {
  font-size: 1.25rem;
  font-weight: 700;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-radius: 0 !important;
}

.card-body {
  padding: 1.5rem;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-text {
  color: #6c757d;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.btn-gradient {
  background: linear-gradient(45deg, #3b4e88, #92c8f5);
  border: none;
  color: white;
  padding: 12px 24px;
  font-size: 1.1rem;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(45deg, #92c8f5, #3b4e88);
  transform: scale(1.05);
}

hr {
  border-width: 3px;
  border-color: #5c7a8c;
  width: 50px;
}

.publish-date-time {
  font-size: 0.9rem;
  color: #17a2b8; 
}

.view-count {
  font-size: 0.9rem;
  color: #28a745; 
}


@media (max-width: 767px) {
  .card-body {
    padding: 1rem;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-text {
    font-size: 0.85rem;
  }

  .btn-gradient {
    font-size: 1rem;
  }
}

@media (max-width: 991px) {
  .card-body {
    padding: 1rem;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-text {
    font-size: 0.9rem;
  }
}
</style>
