<template>
  <div>Child</div>
  {{ counter }}
  <!-- <button v-on:click="submitCounter()">Submit Result</button> -->
</template>

<script>
export default {
  name: "ChildComponent",
  /**
   * Props are custom attributes you can register on a component.
   * When a value is passed to a prop attribute, it becomes a property on that component instance. The value of that property is accessible within the template, just like any other component property.
   *
   * Reference: https://v3.vuejs.org/guide/component-basics.html#passing-data-to-child-components-with-props
   */
  // props: {
  //   start: {
  //     type: Number,
  //     default: 0,
  //   },
  // },
  data() {
    return {
      // counter: this.start,
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  /**
   * Reference: https://v3.vuejs.org/guide/component-basics.html#listening-to-child-components-events
   */
  // methods: {
  //   submitCounter() {
  //     this.$emit("counter-result", this.counter);
  //   },
  // },
};
</script>
