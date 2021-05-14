<template>
  <h1>Base Route</h1>
  <p>
    <router-link to="/about">Go to about</router-link>
    <br />
    <router-link :to="{ name: 'blog', params: { id: 'aaa-bbb-ccc' } }"
      >Go to blog</router-link
    >
  </p>
</template>

<script>
export default {
  name: "Base",
};
</script>
