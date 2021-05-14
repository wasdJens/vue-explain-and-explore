<template>
  <div>
    <h2 class="text-2xl">Parent Component</h2>
    <p>Event Results</p>
    {{ counter }}
  </div>
  <div>
    <h2 class="text-2xl">Children</h2>
    <child-component></child-component>
    <!-- <child-component v-bind:start="500"></child-component> -->
    <!-- <child-component v-on:counter-result="onCounterResult"></child-component> -->
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  name: "ee-2",
  components: { ChildComponent },
  data() {
    return {
      counter: null,
    };
  },
  methods: {
    onCounterResult(counter) {
      this.counter = counter;
    },
  },
};
</script>
