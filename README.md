# Vue explain and explore

This project is part of a PlanB GmbH Explain and Explore to showcase vuejs and its ecosystem. The full presentation notes will be made available later on. The showcase is mostly based on live examples and less on text - but every concept explained here is referenced below (or inside the corresponding vue component with a `Reference:` comment) from the official vue documentation.

The vue project was built with the vue cli and can be locally run with `npm run serve`

For questions or ideas feel free to reach out to me: `Jens.Reiner@plan-b-gmbh.com`

## What is Vue?

- Progressive framework for building user interfaces
- Core is focused on the view layer only
- Large ecosystem to support large-scale-applications

## Disclaimer

All examples and doc links are targetet for Vue V3. The example project is built with the vue-cli.
Not all Vue tools, libraries (etc.) are yet fully supporting Vue V3.

For references each section is tagged with its corresponding vue file.

The project itself is using tailwindcss but not much styling etc. is done

## Resources

- [Official Vue Website](https://v3.vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)
- [Vue Browser Devtools](https://devtools.vuejs.org/)
- [Vue Lifecycle](https://v3.vuejs.org/images/lifecycle.svg)
- [Vue Router](https://next.router.vuejs.org/)
- [Debugging in VS Code](https://v3.vuejs.org/cookbook/debugging-in-vscode.html)
- [Vue Cookbook for V2](https://vuejs.org/v2/cookbook/index.html)
- [Vue Style Guide](https://v3.vuejs.org/style-guide/)
- [Vue Awesome - A curated list of awesome things related to Vue.js](https://github.com/vuejs/awesome-vue)
- [VueUse - Collection of essential Vue Composition Utilities](https://vueuse.org/)

# Vue Basics

## Pizza Generator (ee-1)

**Key Results**

- `data` function in vue
- `template` binding basics
- element attribute bindings
- vue basics

**References**

- https://v3.vuejs.org/guide/introduction.html#declarative-rendering
- https://v3.vuejs.org/guide/introduction.html#handling-user-input
- https://v3.vuejs.org/guide/introduction.html#conditionals-and-loops

## Components (ee-2)

> The component system is another important concept in Vue, because it's an abstraction that allows us to build large-scale applications composed of small, self-contained, and often reusable components.

**Key Results**

- A typicial vue application it built out of multiple components
- Components can be re-used anywhere
- Components can communicate with each other over a parent <-> child relationship
- Passing data to components
- Listen for events

**References**

- https://v3.vuejs.org/guide/introduction.html#composing-with-components
- https://v3.vuejs.org/guide/component-basics.html#base-example

**Further Reading**

- https://v3.vuejs.org/guide/component-props.html
- https://v3.vuejs.org/guide/component-slots.html#slot-content

## Routing (About.vue, Base.vue, router/index.js, App.vue)

**Key Results**

- `router-view` and `router-link` components
- Named routes
- Passing props to route components
- A quick look into navigation guards

**References**

- https://next.router.vuejs.org/

**Further Reading**

- https://next.router.vuejs.org/guide/advanced/navigation-guards.html#navigation-guards
- https://next.router.vuejs.org/guide/advanced/lazy-loading.html#lazy-loading-routes

# Scaling Up (Different Explain and Explore)

## State Management

- Vuex state management

**References**

- https://v3.vuejs.org/guide/state-management.html#state-management

## Reusability & Composition

- Composition API
- Mixins
- Custom Directives
- Teleport

**References**

- https://v3.vuejs.org/guide/composition-api-introduction.html#introduction
- https://v3.vuejs.org/guide/mixins.html#basics
- https://v3.vuejs.org/guide/custom-directive.html

## Typescript Support

**References**

- https://v3.vuejs.org/guide/custom-directive.html

## Unit Testing in Vue

**References**

- https://next.vue-test-utils.vuejs.org/guide/

## Internationalization in Vue

**References**

- https://kazupon.github.io/vue-i18n/

## NuxtJS

**References**

- https://nuxtjs.org/
