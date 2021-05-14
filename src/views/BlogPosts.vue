<template>
  <div>
    <h2>Blog Posts</h2>
    <p>Blog post ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "BlogPosts",
  /**
   * Using the route parameter as prop
   *
   * Reference: https://next.router.vuejs.org/guide/essentials/passing-props.html#passing-props-to-route-components
   */
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
