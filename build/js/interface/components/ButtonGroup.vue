<template>
    <div class="button-group" :class="{small}">
        <slot></slot>
        <div id="block" :class="{'right-position': rightPosition, red}"></div>
    </div>
</template>

<script>
    export default {
        name: "ButtonGroup",
        props: {
            "current": Number,
            "change-color": Boolean,
            "small": Boolean
        },
        computed: {
            rightPosition: function(){
                return this.current === 2;
            },
            red: function(){
                return this.rightPosition && this.changeColor;
            }
        }
    }
</script>

<style scoped lang="scss">
    .button-group{
        display: flex;
        justify-content: space-evenly;
        position: relative;

        >div {
            z-index: 5;
        }

        #block {
            position: absolute;
            width: 140px;
            height: 40px;
            background-color: var(--green);
            z-index: 1;
            top: 5px;
            left: 75px;
            transition: all 0.5s;
        }

        .right-position {
            left: 285px!important;
        }

        .red {
            background-color: var(--red)!important;
        }
    }

    .small{
        #block {
            width: 100px;
            height: 35px;
            top: 5px;
            left: 20px;
        }

        .right-position {
            left: 135px!important;
        }
    }
</style>
