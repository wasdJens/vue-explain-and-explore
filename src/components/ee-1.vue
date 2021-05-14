<template>
  <h1 class="text-4xl">Pizza generator</h1>
  <div class="flex gap-2 flex-row">
    <div>
      <p class="text-2xl">Available options</p>
      <b>Toppings</b>
      <p
        class="text-base"
        v-for="(topping, index) in toppings"
        v-bind:key="index"
      >
        {{ topping }}
      </p>
      <b>Sizes</b>
      <p class="text-base" v-for="(size, index) in sizes" v-bind:key="index">
        {{ size }}
      </p>
    </div>
    <div>
      <p class="text-2xl">Your creation</p>
      <div>
        <b>Toppings</b>
        <select v-model="sToppings" multiple>
          <option v-for="(topping, index) in toppings" v-bind:key="index">
            {{ topping }}
          </option>
        </select>
      </div>
      <div>
        <b>Size</b>
        <select v-model="sSize">
          <option v-for="(size, index) in sizes" v-bind:key="index">
            {{ size }}
          </option>
        </select>
      </div>
    </div>
    <div>
      <p class="text-2xl">Result</p>
      <button v-on:click="finishCreation" v-bind:disabled="!hasOptions">
        Finish!
      </button>
      {{ creation }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ee-1",
  /**
   * The data option for a component is a function. Vue calls this function as part of creating a new component instance.
   * It should return an object, which Vue will then wrap in its reactivity system and store on the component instance
   * Reference: https://v3.vuejs.org/guide/data-methods.html#data-properties
   */
  data() {
    return {
      toppings: ["Cheese", "Salami", "Ham"],
      sizes: [30, 40, 50],
      sToppings: [],
      sSize: null,
      creation: {
        toppings: [],
        size: null,
      },
    };
  },
  /**
   * You should avoid using arrow functions when defining methods, as that prevents Vue from binding the appropriate this value.
   * Reference: https://v3.vuejs.org/guide/data-methods.html#methods
   */
  methods: {
    finishCreation() {
      this.creation.toppings = this.sToppings;
      this.creation.size = this.sSize;
    },
  },
  /**
   * computed properties are cached based on their reactive dependencies.
   * Reference: https://v3.vuejs.org/guide/computed.html#computed-caching-vs-methods
   */
  computed: {
    hasOptions() {
      return this.sToppings.length > 0 && this.sSize;
    },
  },
};
</script>
