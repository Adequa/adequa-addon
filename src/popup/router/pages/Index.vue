<template>
  <div>
    <p>Hello {{ $store.state.foo }}!</p>
    <nav>
      <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">{{ route.name }}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
