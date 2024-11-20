<template>
  <footer class="footer">
    <div class="container text-center py-3">
      <p class="mb-0">&copy; 2024 My Portfolio. All rights reserved.</p>
      <small>Designed by Sahil</small>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(45deg, #071c34, #071c34);
  color: #f1faee;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
}

.footer p, .footer small {
  color: #f1faee;
  font-size: 1rem;
}

.footer p {
  margin-bottom: 0;
}

.footer small {
  display: block;
  margin-top: 10px;
  font-style: italic;
}
</style>
