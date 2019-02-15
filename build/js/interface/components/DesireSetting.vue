<template>
    <div class="desire">
        <p>{{desire.name}}</p>
        <div class="actions" v-show="!(desire.validated || desire.removed)">
            <font-awesome-icon icon="check" class="check" @click="check"></font-awesome-icon>
            <font-awesome-icon icon="times" class="remove" @click="remove"></font-awesome-icon>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DesireSetting",
        props: ['desire'],
        methods: {
            check(){
                this.$emit("desire-change", Object.assign(this.desire, {validated: true}))
            },
            remove(){
                this.$emit("desire-change", Object.assign(this.desire, {removed: true}))
            }
        }
    }
</script>

<style scoped lang="scss">
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .desire {
        width: 100%;
        margin: 5px 0;
        p {
            font-family: "Josefin Sans", sans-serif;
        }
    }
    .actions {
        justify-content: space-evenly;
    }
    .check, .remove {
        color: grey;
        transition: color 0.2s ease;
        width: 40px;
        cursor: pointer;
    }
    .check:hover {
        color: var(--green)
    }
    .remove:hover {
        color: var(--red)
    }
</style>
