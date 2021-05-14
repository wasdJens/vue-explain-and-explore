<template>
  <!-- <ee-1></ee-1> -->
  <ee-2></ee-2>
  <!-- <router-view></router-view>
  <router-link to="/">Go Home</router-link> -->
</template>

<script>
import Ee1 from "./components/ee-1.vue";
import Ee2 from "./components/ee-2.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Ee1, Ee2 },
  name: "App",
};
</script>
