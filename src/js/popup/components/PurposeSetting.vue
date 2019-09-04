<template>
  <div class="container">
    <div class="summary">
      <span @click="expand" class="expand">+</span>
      <p @click="expand" class="name">{{ purpose.name }}</p>
      <div v-if="purpose.id === 1" class="toggle" style="visibility: hidden">
        <p>OBLIGATOIRE</p>
        <toggle-button :value="true" color="var(--green)" :sync="true" :disabled="true"></toggle-button>
      </div>
      <div v-else class="toggle" :class="{ active: allowed }">
        <p @click="onClick({ value: !allowed })">{{ text }}</p>
        <toggle-button
          :value="allowed"
          :color="{ checked: 'var(--green)', unchecked: 'var(--red)' }"
          @change="onClick"
          :sync="true"
        />
      </div>
    </div>
    <div class="description" :class="{ hidden: descriptionHidden }">
      <p>{{ purpose.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PurposeSetting',
  props: {
    purpose: Object,
    allowed: Boolean,
  },
  data() {
    return {
      descriptionHidden: true,
      currentSetting: null,
      defaultValue: false,
    };
  },
  computed: {
    text() {
      return this.allowed ? 'ACCEPTÉS' : 'REFUSÉS';
    },
  },
  methods: {
    onClick(e) {
      this.$emit('valueChanged', { id: this.purpose.id, allowed: e.value });
    },
    expand(e) {
      if (this.descriptionHidden) {
        e.target.parentNode.querySelector('.expand').innerText = '-';
        this.descriptionHidden = false;
      } else {
        e.target.parentNode.querySelector('.expand').innerText = '+';
        this.descriptionHidden = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
p {
  font-size: 14px;
  font-family: 'Josefin Sans', sans-serif;
}

.toggle {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  p {
    cursor: pointer;
    color: var(--red);
    font-weight: 300;
    width: 100px;
    text-align: right !important;
  }
}

.active {
  p {
    color: var(--green);
  }
}

.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .name,
  .expand {
    color: gray;
    transition: 0.3s;
  }

  &:hover .name,
  &:hover .expand {
    color: black;
  }
  > div {
    max-width: 180px;
    flex: 1;
  }

  > div:first-child {
    display: flex;

    span {
      margin-right: 20px;
    }

    p {
      width: 200px;
    }
  }

  p {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    margin: 0;
    padding-top: 3px;
  }

  > p {
    flex: 1;
    font-size: 18px;
    padding: 3px 0 0 25px;
    cursor: pointer;
  }

  span {
    width: 17px;
    text-align: center;
    font-size: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

.description {
  transform: scaleY(1);
  transform-origin: 50% 0;
  color: #325050;
  text-align: justify;
  font-weight: lighter;
  font-style: italic;
  padding-right: 10px;
}

.hidden {
  transform: scaleY(0);
  transform-origin: 50% 0;
  height: 0;
}

.container {
  margin-bottom: 10px;
  width: 480px;
}
</style>
