<template>
    <div class="interest">
        <div class="interest-wrapper">
            <div>
                <span class="expand" @click="toggleExpand">+</span>
                <p @click="toggleExpand">{{interest.name}}</p>
            </div>
            <div class="actions">
                <span class="poll" @click="poll"><span>Offres</span> <font-awesome-icon icon="external-link-alt"></font-awesome-icon></span>
                <font-awesome-icon icon="check" class="check" @click="check"
                                   v-show="!(interest.validated || interest.removed)"></font-awesome-icon>
                <font-awesome-icon icon="times" class="remove" @click="remove"
                                   v-show="!interest.removed"></font-awesome-icon>
            </div>

        </div>
        <div v-if="expanded" class="parameters">
            <div v-for="item of Object.entries(interest.parameters)">
                <p>{{item[0]}}</p>
                <p>{{item[1]}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InterestSetting",
        props: ['interest'],
        methods: {
            poll() {
                Adequa.API.runtime.sendMessage({what: "pollCatalogs", interest: this.interest});
                window.close();
            },
            check() {
                this.$emit("interest-change", Object.assign(this.interest, {validated: true}))
            },
            remove() {
                this.$emit("interest-change", Object.assign(this.interest, {removed: true}))
            },
            toggleExpand(e) {
                this.expanded = !this.expanded;
                e.target.parentNode.querySelector('.expand').innerText = this.expanded ? '-' : '+';
            }
        },
        data() {
            return {
                expanded: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .interest-wrapper, .interest-wrapper div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .parameters {
        border-left: 1px solid black;
        padding-left: 8px;
        flex-direction: column;
        margin: 10px 0 10px 45px;
        display: flex;
        justify-content: space-between;
        font-family: "Josefin Sans", sans-serif;

        * {
            font-size: 14px !important;
        }

        > div {
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            > p:last-child {
                font-weight: 300;
            }
        }
    }

    .interest {
        width: 100%;
        margin: 5px 0;
    }

    .interest-wrapper {
        width: 100%;

        p {
            font-family: "Josefin Sans", sans-serif;
            margin-left: 15px;
        }
    }

    .hidden {
        display: none;
    }

    .actions {
        justify-content: space-evenly;
    }

    .check, .remove, .poll {
        color: grey;
        transition: color 0.2s ease;
        cursor: pointer;
    }

    .check:hover {
        color: var(--green)
    }

    .remove:hover {
        color: var(--red)
    }

    .poll {
        font-family: "Josefin Sans", sans-serif;
        font-weight: 300;
        display: flex;
        align-items: center;
        margin-right: 10px;

        span {
            padding-top: 3px;
        }

        svg {
            margin-left: 5px;
        }
    }

    .poll:hover {
        color: var(--green);
    }

    .expand {
        width: 25px;
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

    .pointer {
        cursor: pointer;
    }
</style>
