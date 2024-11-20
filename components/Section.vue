<template>
    <section class="mb-5">
      <h2>{{ title }}</h2>
      <slot></slot>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
    },
  };
  </script>
  
  <style scoped>
  h2 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  </style>
  