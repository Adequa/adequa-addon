<template>
    <div :class="{small}">
        <p @click="onClick" :class="{active}">{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "AdequaButton",
        props: {
            "text": String,
            "button-id": Number,
            "active": Boolean,
            "default": Boolean,
            "small": Boolean
        },
        methods: {
            onClick: function(e){
                this.$emit("button-clicked", {"button": this.buttonId});
            }
        },
    }
</script>

<style scoped lang="scss">
    p {
        color: gray;
        border: 2px solid gray;
        width: 140px;
        text-align: center;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 0.5s;
        cursor: pointer;

        span {
            font-size: 14px;
        }
    }
    .active {
        border-color: black;
        color: black;
    }

    .small {
        p {
            width: 100px!important;
            height: 35px!important;
            font-size: 14px;

            span {
                font-size: 12px;
            }
        }
    }
</style>
