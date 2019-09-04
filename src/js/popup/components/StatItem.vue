<template>
  <div class="stat">
    <span class="number"
      >{{ number }}<sub>{{ unit }}</sub></span
    >
    <div>
      <p class="title" v-html="title"></p>
      <i class="subtitle" v-html="subtitle"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatItem',
  props: ['number', 'unit', 'title', 'subtitle'],
};
</script>

<style scoped lang="scss">
.stat {
  display: flex;
  font-family: 'Josefin Sans', sans-serif;
  margin: 40px 0;

  .number {
    width: 190px;
    margin-right: 10px;
    font-size: 50px;
    color: #64a19d;
    text-align: right;

    sub {
      width: 15px;
      display: inline-flex;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-size: 20px;
      margin: 5px 0;
    }
    .subtitle {
      font-weight: 300;
      font-size: 14px;
      color: grey;
    }
  }
}
</style>
